import React, { useEffect } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { increment, decrement, deleteHandler } from '../redux/cartSlice'

const CartItem = ({imgSrc, name, price, quantity, id, selectedSize}) => {

    const dispatch = useDispatch()
    const totalItemPrice = (price * quantity).toFixed(2)

  return (
    <div className="left w-[100%]">
            <div className='w-[100%] border-b-[1px] boder-black pb-4 mt-4'>
            <div className='flex gap-4 relative'>
                <img src={imgSrc} alt={name} loading="lazy" className='w-[110px] md:w-[150px] h-[135px] md:h-[170px] rounded-lg'/>
                <div>
                    <h3 className='text-xl font-bold font-palanquin mb-4'>{name}</h3>
                    <p className='text-gray-700 mt-2 font-montserrat text-sm'>Unisex Shoes</p>
                    <p className='text-gray-700 mt-2 font-montserrat text-sm'>Leather/Playfull Colors/Everyday</p>
                    <div className='flex gap-4 items-center justify-start mt-2'>
                        <p className='text-gray-700 font-montserrat text-sm'>{`Size:${selectedSize}`}</p>
                        <div>

                        <div className='flex items-center gap-4'>
                            
                        <p className='text-gray-700 font-montserrat text-sm'>QTY</p>
                        <button onClick={()=>dispatch(decrement(id))}>-</button>
                        <p className='text-gray-700 font-montserrat text-sm'>{quantity}</p>
                        <button onClick={()=>dispatch(increment(id))}>+</button>
                        </div>

                        </div>
                    </div>
                    <RiDeleteBin6Line onClick={()=>dispatch(deleteHandler(id))} className='text-2xl mt-4 text-gray-500 hover:text-black'/>
                </div>
                <div className='absolute right-[1rem] md:right-10 top-10 md:top-0'>
                    <p className='font-montserrat text-lg'>{`₹${totalItemPrice}`}</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default CartItem
