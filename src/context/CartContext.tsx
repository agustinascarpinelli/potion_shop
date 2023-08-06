import { createContext, Dispatch, useReducer, useContext, ReactNode, useEffect } from 'react';
import Product from "../models/ProductModel";



interface CartState {
    products: Product[];
    balance: number;
}

interface CartAction {
    type: string;
    payload?: Product;
}




const CartContext = createContext<{ state: CartState; dispatch: Dispatch<CartAction> } | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            if (state.balance >= action.payload!.precio) {
                const existItem = state.products.find((prod) => prod.id === action.payload!.id)
                const existCat=state.products.find((prod)=>prod.categoria===action.payload!.categoria)
                if (existItem) {
                    return state;
                }else if(existCat){
                     return state;
                }
                else {
                    return {
                        ...state,
                        products: [...state.products, action.payload!],
                        balance: state.balance - action.payload!.precio
                    }
                }
            }
            return state;
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter((prod) => prod.id !== action.payload!.id),
                balance: state.balance + action.payload!.precio
            }
        case 'CHECKOUT':
            return {
                ...state,
                products: [],
                balance: 3
            }
    }

    return state;
}

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initialState: CartState = { products: [], balance: 3 };

    const storedState = localStorage.getItem('cartState');
    const parsedState = storedState ? JSON.parse(storedState) : null;

    const [state, dispatch] = useReducer(cartReducer, parsedState || initialState);
    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(state));
    }, [state]);



    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Not context provided')
    }
    return context;
}

export { CartProvider, useCart }