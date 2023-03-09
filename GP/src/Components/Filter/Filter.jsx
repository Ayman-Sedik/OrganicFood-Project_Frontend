import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Filter.module.css'
export default function Filter() {  
    const navigate = useNavigate()
  return (
    <>
          <div className={`${style.filter} my-5 bg-light py-5 text-center`}>
              <div className="container ">
                  <p className={`${style.filterSection} fs-2 fw-semibold mb-5`}> <i>Explore our sustainable online store</i> </p>
                  <div className="row g-5 ">
                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/vegetables')} className={`${style.title ,style.curserPointer} position-relative `}>
                              <img src="images/vegitables.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold  translate-middle py-1`}> <i>Vegetables</i> </div>
                          </div>
                      </div>

                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/fruits')} className={`${style.title,style.curserPointer} position-relative`}>
                              <img src="images/fruits.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold  translate-middle py-1`}> <i>Fruits</i> </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/milk')} className={`${style.title  ,style.curserPointer} position-relative`}>
                              <img src="images/milk.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold  translate-middle py-1`}> <i>Milk</i> </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/herbals')} className={`${style.title  ,style.curserPointer} position-relative`}>
                              <img src="images/herbs.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold  translate-middle py-1`}> <i>Herbals</i> </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/meat')} className={`${style.title  ,style.curserPointer} position-relative`}>
                              <img src="images/meat.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold  translate-middle py-1`}> <i>Meat</i> </div>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                          <div onClick={()=>navigate('/meals')} className={`${style.title  ,style.curserPointer} position-relative`}>
                              <img src="https://img.delicious.com.au/FhRD4JI0/del/2020/12/iceberg-with-dried-oregano-dressing-and-creamy-sheeps-milk-cheese-143662-2.jpg" alt="" />
                              <div className={`${style.caption} fs-4 fw-semibold translate-middle py-1`}> <i>Meals</i> </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          

          <div className={`${style.iconInfo} my-5 `}>
              <div className="container border py-4 px-4 rounded">
                  <div className="row">
                      


                      <div className={`${style.iconItem} col-md-3 col-sm-6 d-flex align-items-center ${style.brdr}    `}>
                          <img src="images/icons/1.png"  alt="" />
                          <div className={`text-start ms-2`}>
                            <p className={`${style.headline} m-0 fw-bold `}>Free Shipping On Order Over 500 EGP</p>
                            <p className={`m-0 text-secondary`}>Free shipping on all order</p>
                          </div>
                      </div>

                      <div className={`${style.iconItem} col-md-3 col-sm-6 d-flex align-items-center ${style.brdr}    `}>
                          <img src="images/icons/2.png"  alt="" />
                          <div className={`text-start ms-2`}>
                            <p className={`${style.headline} m-0 fw-bold `}>Money Return</p>
                            <p className={`m-0 text-secondary`}>Back guarantee under 7 days</p>
                          </div>
                      </div>

                      <div className={`${style.iconItem} col-md-3 col-sm-6 d-flex align-items-center ${style.brdr}    `}>
                          <img src="images/icons/3.png"  alt="" />
                          <div className={`text-start ms-2`}>
                            <p className={`${style.headline} m-0 fw-bold `}>Member Discount
</p>
                            <p className={`m-0 text-secondary`}>Support online 24 hours a day

</p>
                          </div>
                      </div>

                      <div className={`${style.iconItem} col-md-3 col-sm-6 d-flex align-items-center     `}>
                          <img src="images/icons/4.png"  alt="" />
                          <div className={`text-start ms-2`}>
                            <p className={`${style.headline} m-0 fw-bold `}>Online Support 24/7</p>
                            <p className={`m-0 text-secondary`}>Free shipping on all order

</p>
                          </div>
                      </div>


                  </div>
              </div>
          </div>
    </>
  )
}
