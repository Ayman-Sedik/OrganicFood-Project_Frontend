import React from 'react'
import  style  from './IsLoading.module.css'
export default function IsLoading() {
  return (
    <>
                
                <div className=" d-flex justify-content-center align-items-center">
              
              <div class={`${style.loading}`}><div></div><div></div><div></div><div></div></div>
                  </div>
    </>
  )
}
