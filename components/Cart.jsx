import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { RxDoubleArrowLeft } from 'react-icons/rx'
import { toast } from 'react-hot-toast';
import { useStateContext } from '@/context/ContextState';
import { urlFor } from '@/lib/client';

const Cart = () => {
  const cartRef = useRef()
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  console.log(totalPrice)

  return (
    <div className='cart-wrapper' ref={cartRef}>
     
      <div className='cart-container'>
        <button 
         type='button'
         className='cart-heading'
         onClick={() => setShowCart(false)}
        >
          <RxDoubleArrowLeft className='red' />
          <span className='heading'>Your cart</span>
          <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <img src='/emptybag.png' alt='empty/img' className='empty-shopping-bag' />
            <Link href="/">
              <button type='button' className='btn' onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} alt='product/img'  className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>&#8358;{item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec') }><AiOutlineMinus /></span>
                        <span className='num'>{item.quantity}</span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button type='button' onClick={() => onRemove(item)} className='remove-item'>
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>Total:</h3>
              <h3>&#8358;{totalPrice}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick=''>
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
