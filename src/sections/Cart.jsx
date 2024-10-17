import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import { IoCartOutline } from 'react-icons/io5'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { calculatePrice } from '../redux/cartSlice' 
import { emptyCart } from '../assets/images'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart, subTotal, shipping, total} = useSelector((state) => state.cart);
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculatePrice())  
  }, [cart, dispatch])

  return (
    <div className='w-full h-[100vh]'>
      <div className='w-full h-full flex flex-col md:flex-row px-0 md:px-[10rem]'>
      <div className='w-[100%] md:w-[80%] h-full flex overflow-y-scroll hide-scrollbar mt-[30%] md:mt-[10%] justify-start padding-x'>
      <div className="left w-full h-full flex flex-col mt-4">
        <div className='flex items-center gap-1 mb-2'>
      <h1 className='text-2xl font-bold font-palanquin'>Cart</h1>
      <Link to={'/cart'}>      
      <div className='relative'>
            <div className='bg-black rounded-full w-[20px] h-[20px] text-white flex justify-center items-center absolute -right-2 -top-3 text-sm'>
            <p>{cart.length}</p>
            </div>
          <IoCartOutline className='text-3xl'/>
          </div>
      </Link>
        </div>

        {cart.length === 0 ? (
          <div className='text-lg font-montserrat text-gray-500 mt-10 flex flex-col items-center justify-center'>
            <img src={emptyCart} alt="empty cart" loading="lazy" className='w-[20rem] h-[20rem] '/>
          <p>Nothing in Cart</p>
        </div>
        ):(
          cart.map((product)=>(
            <CartItem 
            name={product.name}
            imgSrc={product.productImg1}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
            key={product.id}
            selectedSize={product.selectedSize}
            />
          ))
        )}
         {/* {
        
      } */}
        </div>
        </div>
        <div className="right w-[100%] md:w-[35%] h-full">
            <div className='mt-[10%] md:mt-[44%] ml-0 md:ml-10 padding-x md:px-0 w-full'>
                <h1 className='text-2xl font-bold font-palanquin mb-8'>Summary</h1>
                <div className='flex mb-2 justify-between w-full font-montserrat text-md'>
                <p>Subtotal</p>
                <p>{subTotal || 0}</p>
                </div>
                <div className='flex mb-2 justify-between w-full font-montserrat text-md'>
                    <p>Delivery Chrages</p>
                    <p>{shipping || 0}</p>
                </div>
                    <div className='flex mt-8 justify-between w-full font-montserrat text-lg border-t-[0.5px] border-b-[0.5px] border-coral-red py-2'>
                        <p>Total</p>
                        <p>{total || 0}</p>
                    </div>
                    <div className='mt-10'>
                    <Button lable="Checkout" iconUrl={arrowRight}/>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
