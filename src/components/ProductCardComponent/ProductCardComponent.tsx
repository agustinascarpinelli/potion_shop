import { useCart } from "../../context/CartContext";
import Product from "../../models/ProductModel";
import './ProductCardComponent.css'

interface ProductProps{
    product:Product;
}

export const ProductCard:React.FC<ProductProps> =({product})=>{


const {state,dispatch}=useCart()
const handleAddToCart=()=>{
    console.log(categoryExists)
    dispatch({type:'ADD_PRODUCT',payload:product})
}
const prodExists=state.products.some((prod)=>prod.id===product.id)
const categoryExists=state.products.some((prod)=>prod.categoria===product.categoria)
const priceHigh=state.balance < product.precio
const disabled= state.balance < 1 || prodExists || categoryExists || priceHigh;
 
return(
        <div className="product-card bg-stone-700">
            <div className="product-price"><p>{product.precio }  {product.precio > 1 ? "Gemas" : "Gema"} </p></div>
            <img className="product-img" src={product.imagen}></img>
            <div className="product-info">
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            </div>
            <button onClick={handleAddToCart} disabled={disabled } className="btn-add">Agregar</button>
        </div>
    )
}