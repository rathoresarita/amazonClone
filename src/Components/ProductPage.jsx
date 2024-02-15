import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { callApi } from '../utils/CallApi'



const ProductPage = () => {
    const { id } = useParams()
    const [product,setProduct]=useState(null)
    const getProduct = () => {  
        callApi(`data/products.json`).then((productResult) =>{
            setProduct(productResult[id])
            console.log('Product',product)
        }


    )}
    useEffect(()=>{
getProduct()
    },[])

if(!product?.title)
{
    return <h1>Loading Product ....</h1>
}
    return (
        product &&
        <div className='h-screen bg-amazonclone-background'>
            <div className='min-w-[1500px] m-auto bg-orange-400'></div>
            <div className='grid  grid-cols-10'>
                {/* left */}
                <div>

                </div>
                 {/* mid */}
                 <div>

                 </div>
                  {/* right*/}
            </div>
            Product  {product.title}
        </div>
    )
}

export default ProductPage
