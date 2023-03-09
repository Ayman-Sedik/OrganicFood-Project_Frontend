import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increamentItem } from '../../Store/cartData/cart'
import style from './DiseaseItem.module.css'
export default function DiseaseCard(props) {


  
  
  let { name, src, quentity, offer,desc, price } = props.product
  console.log(quentity)
  const { cartItem  } = useSelector((state) => state.cartSlice)
  let totalQty =  cartItem.reduce((x,y)=>x+y.qty,0)	
	let totalPrice =  cartItem.reduce((x,y)=>x+y.qty*y.price,0)	

  let dispatch = useDispatch()
  return (
    <>
      
      


      
        <div className={`${style.cardContainer} bg-light p-2 m-2 card shadow-sm border position-relative`}>
          <div className={`${style.imgContainer} position-relative bg-primary rounded overflow-hidden d-flex justify-content-center align-items-center`}>
            <img className={` w-100 rounded mx-auto d-block ${style.img} `} src={src} alt="" />
            <div className={`position-absolute ${style.layer}`}></div>
          </div>
       
          <div className={` ${style.body}`}>
            <p className={` ${style.name} fw-semibold text-center text-capitalize `}>{name}</p>
              <p className={`${style.price} fw-bold ps-2 fs-5  `}> Price : <span className='text-success'>{price}</span> <span className="fs-6 text-muted ">EGP</span> </p> 
          <p className={`${style.desc} fw-semibold ps-2 text-muted  mt-2  `}> <span className='fw-bold text-dark'> Description :</span> {desc}</p> 
            
          </div>
        </div>






      
    </>
  )
}
