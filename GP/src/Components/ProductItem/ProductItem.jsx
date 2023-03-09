import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increamentItem } from '../../Store/cartData/cart'
import style from './ProductItem.module.css'
export default function ProductItem(props) {

  let { name, src, desc, quantity, offer, price } = props.product
  const { cartItem  } = useSelector((state) => state.cartSlice)
  let totalQty =  cartItem.reduce((x,y)=>x+y.qty,0)	
	let totalPrice =  cartItem.reduce((x,y)=>x+y.qty*y.price,0)	

  let dispatch = useDispatch()

  


  

  return (


    <>
 


      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`${style.cardContainer} bg-light p-2  bg-body shadow p-2 rounded position-relative`}>
          <div className={`${style.imgContainer} position-relative   overflow-hidden`}>
            <img className={` w-100 `} src={src} alt="" />
            <div className={`position-absolute ${style.layer}`}></div>
          </div>
          {offer != 0 ? <div className={`position-absolute ${style.OfferLayer}`}>
            <span className='text-center'>offer <br />{offer}%</span>

          </div> : ''}
          <div className={` ${style.body}`}>
            <p className={` ${style.name} fw-semibold text-center text-capitalize  container `}>{name}</p>
            {offer == 0 ?
              <p className={`${style.price} fw-bold ps-3  my-3`}> {price} EGP </p> :
              <p className={`${style.price} fw-bold ps-3  my-3`}><s className=' pe-2'>{price} EGP</s>{price * (100 - offer) / 100} EGP</p>
            }

            <p className={`${style.quantity} fw-semibold ps-3`}>Quantity : <span className='text-success'>{quantity}</span></p>

            <div className='d-flex justify-content-center pt-2 pb-1'>


              <button className={`${style.butn} btn btn-warning text-white`} onClick={(e) => {
                  dispatch(increamentItem(props.product))
                  
                
                
              }}> <i class="fa-solid fa-cart-arrow-down"></i> Add To Card</button>



            </div>
          </div>
        </div>
      </div>



</>
)
}