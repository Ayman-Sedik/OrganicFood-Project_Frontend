import React from 'react'
import { useNavigate } from 'react-router-dom';
import Style from "./DeliverySec.module.css";

export default function DeliverySec() {
  let navigate = useNavigate()
  return (
    <>
      <div className="bg-light p-3 py-5 my-5 text-center">
        <div className="container">
        <h1 className={`${Style.title} fs-2 fw-semibold `}> <i>We will reach you anywhere</i></h1>
          <div className="row ">
            <div className={`${Style.outBrdr} col-md-4 `}>
              <div className={`${Style.brdr}`}>
                <img src="images/Delivery3.png" alt="" className="w-75" />
              </div>
              <p>
                {" "}
                Delivery Safe’s lockable food box helps keep your delivered
                perishables and meal kits safe.
              </p>
            </div>
            <div className={`${Style.outBrdr} col-md-4 `}>
              <div className={`${Style.brdr}`}>
                <img src="images/Delivery.png" alt="" className="w-75" />
              </div>
              <p> Enjoy reliable, weekly, carbon-neutral deliveries.</p>
            </div>
            <div className="col-md-4">
              <div>
                <img src="images/Delivery2.png" alt="" className="w-75" />
              </div>
              <p> We visit each area on a set day each week. </p>
            </div>
          </div>
          <button onClick={()=>navigate('products')} className={`${Style.button} btn fw-semibold btn-md mt-4`}>Start shopping</button>
        </div>
      </div>
    </>
  );
}
