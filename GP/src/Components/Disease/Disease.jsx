import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Disease.module.css'

export default function Disease() {
  let navigate = useNavigate()
  return (
    <div>
    <div className={`${style.text} bg-light py-3 p-5 text-center my-5`}>
    <br/>
    <i className={`${style.header} fs-2 fw-semibold`}>Relationship between organic food and diseases.
    </i>
    <div className="container">

      <div className="row ">
        <div className={` col-md-3 `}>
          <div className={`py-1`}>
            <img src="images/diseases/diabetes.png" className='w-50' alt="diabetes"  />
          </div>
          <span className='fs-4 fw-semibold text-center'>Diabetes</span>
          <p className='fs-6'>
          Diabetes is a great example whereby, giving the patient the tools, you can manage yourself very well.          </p>
          <button onClick={()=>{navigate('diabetes')}} className={`${style.button} text-white btn`}>Show products</button>

          <div className={`pt-5`}>
            <img src="images/diseases/pressure.png" alt="Pressure" className='w-50' />
          </div>
          <span className='fs-4 fw-semibold text-center'>Pressure
          </span>

          <p className='fs-5'>
            
Blood-Pressure is a disease, but it can't manage my life.          </p>
<button onClick={()=>{navigate('pressure')}} className={`${style.button} text-white btn`}>Show products</button>
</div>
       <div className='col-md-6 d-flex align-items-center justify-content-center'>
      <div>
      <img src="images/diseases/heart.png" className={`${style.fluid} w-75`} alt="heart" />
      <br/>
      <span className='fs-4 fw-semibold text-center'>Heart
      </span>
   <p className='fs-5'>
     
   The problem with heart disease is that the first symptom is often fatal

   </p>
   <button onClick={()=>{navigate('heart')}} className={`${style.button} text-white btn`}>Show products</button>

      </div>
    
       </div>
       <div className={` col-md-3  `}>
       <div className={`py-1`}>
         <img src="images/diseases/liver.png" alt="liver" className='w-50'  />
       </div>
       <span className='fs-4 fw-semibold text-center'>Liver

          </span>
       <p className='fs-6'>
         
       Liver problems can be caused by a variety of factors that damage the liver.
       </p>
       <button onClick={()=>{navigate('liver')}} className={`${style.button} text-white btn`}>Show products</button>

       <div className={`py-1`}>
         <img src="images/diseases/kidney.png" alt="kidney" className='w-50' />
       </div>
       <span className='fs-4 fw-semibold text-center'>
       Kidney
       </span>

       <p className='fs-5'>
         
       Kidney disease means your kidneys are damaged and can’t filter blood the way they should.

       </p>
       <button onClick={()=>{navigate('kidney')}} className={`${style.button} text-white btn`}>Show products</button>

     </div>
      </div>
      </div>
      </div>
    </div>
  )
}
