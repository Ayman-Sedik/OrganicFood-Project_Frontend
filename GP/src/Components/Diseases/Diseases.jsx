import React from 'react'
import Style from './Diseases.module.css'
export default function Diseases() {
  return (
    <>
      <div className={`${Style} bg-light p-5 text-center`}>
        <div className="container">
        <h1 className={`${Style.title} fs-2 fw-semibold mb-5 `}> <i> Contact our nutritionist for more details </i> </h1>

          <div className="row ">
            <div className="col-md-6">
                <img
                  src="images/section/food.png"
                  alt=""
                  className={`${Style.img} p-1 w-100`}
                />
                <div className={`${Style.content}   text-center`}>
                <span className={`${Style.quete} fs-1`}>❝</span> 
                  <span>  <i className='text-muted' >
                  The doctor of
                  the future will no longer treat the human frame with drugs,
                  but rather will cure and prevent disease with nutrition.
                  
                  </i></span>
                  <span className={`${Style.quete} fs-1`}>❞</span>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <img
                src="images/section/doctor.jpg"
                alt=""
                className={`${Style.img} w-100`}
              />
            <div className={`${Style.content}   text-center`}>
            <span className={`${Style.quete} fs-1`}>❝</span> 
            <span>  <i className='text-muted' >
            Tell me what you eat, and I will tell you what you are.
              
              </i></span>
              <span className={`${Style.quete} fs-1`}>❞</span>
          </div>
          </div>
          
          
          
          
          </div>
          <button className={`btn ${Style.botton}  mt-3`}><a className="text-decoration-none text-white" target="_blank" href="https://wa.me/01062944013">Contact For More</a>  </button>
        </div>
      </div>
   
</>
);
}