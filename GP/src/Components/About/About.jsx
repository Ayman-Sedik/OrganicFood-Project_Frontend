import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <>
    
    


  
    <div className=' mb-5'>
    <img src="images/content.jpg" alt="" className='w-100 ' />
</div>

<div className='container'>
<div className="row ">
<div className="col-md-6">
  <div className="">
    <img
      src="images/content1.jpg"
      alt=""
      className={` w-75`}
    />
  </div>
</div>
<div className="col-md-6 d-flex align-items-start">
  <div className={` `}>
    <div className={`text-start`}>
    <span className={`fs-3 mb-3 fw-semibold`}>    OUR PURPOSE
    </span>
    <br/>
<p className='text-muted fw-semibold'>      We want to provide easy ways to help the <span className={`${style.planet}`}>planet</span> . That’s why we put in all the hard work behind the scenes, from sourcing the finest <span className={`${style.planet}`}>planet</span>, <span className={`${style.planet}`}>sustainable</span>  and <span className={`${style.planet}`}>organic</span>  food to reducing unnecessary packaging, so all you have to do is choose your sustainable, weekly shop. From supporting independent growers and makers to cutting carbon emissions, every carbon-neutral box that lands on your doorstep makes a difference. Combatting climate change is no small feat, and our work will never be done. But together, we can build a greener future for all.
</p>      
  </div>
    </div>
</div>
</div>
</div>
    <div className={`${style.text} bg-light py-3 p-5 text-center my-5`}>
    <div className="container">

    <img src="images/icon1.png" alt=""/>
    <br/>
    <i className={`${style.header} fs-1`}>Why Choose Us
    </i>
      <div className="row ">
        <div className={` col-md-3 `}>
          <div className={`py-1`}>
            <img src="images/leaves.png" alt=""  />
          </div>
          <span className='fs-5 fw-semibold text-center'>ALWAYS FRESH</span>
          <p className='fs-5 text-muted'>
          Freshness is essential. That makes all the difference.
          </p>
          <div className={`pt-5`}>
            <img src="images/heath.png" alt="" />
          </div>
          <span className='fs-5 fw-semibold text-center'>SUPER HEALTHY
          </span>

          <p className='fs-5 text-muted'>
            
          You are what you eat, so don’t be fast, cheap,or easy.
          </p>
        </div>
       <div className='col-md-6 d-flex align-items-center justify-content-center'>
      
       <img src="images/v1.png" className={`${style.fluid} w-100`} alt="" />
      
       </div>
       <div className={` col-md-3  `}>
       <div className={`py-1`}>
         <img src="images/tree.png" alt=""  />
       </div>
       <span className='fs-5 fw-semibold text-center'>100% NATURAL

          </span>
       <p className='fs-5 text-muted'>
         
       Don’t find customers for your products, find products for your customers.


       </p>
       <div className={`py-1`}>
         <img src="images/hc.png" alt="" />
       </div>
       <span className='fs-5 fw-semibold text-center'>
       PREMIUM QUALITY
       </span>

       <p className='fs-5 text-muted'>
         
       Happiness is not a goal; it is a by-product.


       </p>
     </div>
      </div>
      </div>
      </div>
    </>
  )
}
