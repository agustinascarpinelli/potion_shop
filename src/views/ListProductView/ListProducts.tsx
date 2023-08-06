import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../models/ProductModel';
import { ProductCard } from '../../components/ProductCardComponent/ProductCardComponent';
import './ListProducts.css';
import { ClipLoader } from 'react-spinners';


export const ListProductsComponent = () => {




  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)

  useEffect(() => {
    axios.get<Product[]>('http://localhost:3001/productos')
      .then((res) => {
        console.log(res)
        setProducts(res.data)
        setLoading(false)
        setError(false)
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
        setError(true)
      })
  }, [])


  return (
    <>
{    loading ? (<div className='products-loader'><ClipLoader  color=' #8a2be2' size={100} loading={true}/></div>):
    (   
      
      <div className='products-list'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
    
    )}
    {error && <p className='text-center error-products'>Hubo un error cargando los productos, intente mas tarde nuevamente.</p>}
    </>



  );
};
