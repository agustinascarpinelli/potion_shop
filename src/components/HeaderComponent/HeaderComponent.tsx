import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext';
import './HeaderComponent.css'
export const HeaderComponent = () => {
  const { state } = useCart()

  return (
    <div className="bg-stone-700 py-4 px-8 flex justify-between items-center sticky top-0 shadow-md z-10">
      <h1 className="text-white text-2xl font-bold title-nav">🧙‍♂️ Potion Shop</h1>
      <div className="flex gap-2 items-center">
        <img  alt='gema'src="./gem.png" / >
        <span>{state.balance} Gemas</span>
      </div>
      <button className="text-white hover:underline"><Link to='/cart'>Ver Carrito ({state.products.length})</Link></button>
    </div>
  );
};
