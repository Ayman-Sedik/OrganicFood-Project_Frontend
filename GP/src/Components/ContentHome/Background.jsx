import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Background.module.css'

export default function Background() {
let navigate =   useNavigate()
  return (
    <>
          
          
          <div className={`container-fluid vh-100 ${style.bgSlider}`}>
          <div className={`${style.layer} position-relative vh-100 container-fluid d-flex justify-content-center align-items-center`}>

                  <div className={`${style.contentSlider}`}>
                      <p>You can’t enjoy wealth</p>
                      <p> if you’re not in good <span >health</span>.</p>
                  </div>
                  <button onClick={()=>{navigate('products')}} className={`${style.btnShop} btn fs-5 translate-middle position-absolute text-white `}>Shopping Now</button>
        </div>
        </div>
        
    </>
  )
}
