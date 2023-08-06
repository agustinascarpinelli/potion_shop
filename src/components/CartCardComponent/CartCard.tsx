import { useCart } from "../../context/CartContext";
import Product from "../../models/ProductModel"
import './CartCard.css'

interface ProductProps {
    product: Product
}

export const CartCard: React.FC<ProductProps> = ({ product }) => {
    const { dispatch } = useCart()

    const handleRemoveProduct = () => {
        dispatch({ type: 'REMOVE_PRODUCT', payload: product });
    };



    return (
        <div className="cart-item  bg-stone-700">
            <img src={product.imagen} />
            <h1>{product.nombre}</h1>
            <button onClick={handleRemoveProduct}>x</button>

        </div>
    )

}