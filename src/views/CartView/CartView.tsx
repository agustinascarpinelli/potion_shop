import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../../context/CartContext';
import { CartCard } from '../../components/CartCardComponent/CartCard';
import './CartView.css';
import { useState } from 'react';

export const CartComponent = () => {

  const [buy, setBuy] = useState<Boolean>(false)
  const [error, setError] = useState<Boolean>(false)

  const { state, dispatch } = useCart()


  const disabled = state.products.length <= 0;

  const handleCheckout = () => {
    const total = state.products.map((prod) => prod.id);
    axios.post('http://localhost:3001/compras', { itemsId: total })
      .then((resp) => {
        dispatch({ type: 'CHECKOUT' })
        setBuy(true)
        setError(false)
      })
      .catch((error) => {
        setError(true)
      }
      )
  }


  return (
    <div className='cart'>
      <button className='cart-back'><Link to='/'>Volver</Link></button>
      {buy ? <div><h1>Compra realizada con exito!</h1></div>
        :
        <div>
          <div className='cart-list'>
            {state.products.map((product) => {
              return <CartCard key={product.id} product={product} />
            })}
          </div>
          {error && <div><p className='text-center mt-4 cart-error'>Ocurrio un problema al realizar la compra</p></div>}
          <button disabled={disabled} className='cart-checkout' onClick={handleCheckout}>Comprar</button>
        </div>
      }
    </div>
  );
};
