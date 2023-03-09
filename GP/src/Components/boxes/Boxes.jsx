import { mdiCartArrowDown, mdiFormatListBulleted } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './boxes.module.css'
export default function Boxes() {

    let navigate = useNavigate()
    
  return (
    <>
      
          <div className="boxes my-5 bg-light py-5 text-center">
              <div className="container">
                  <h1 className={`${style.title} fs-2 fw-semibold mb-5`}> <i>Boxes</i> </h1>
                  <div className="row">
                      
                      <div className="col-md-4">
                          <div className={`${style.boxSmall}  p-2 shadow `}>
                              <div className={`${style.imgBox} position-relative `}>
                                  
                                  <img src="images/Boxes/medium.png" className='translate-middle card-img-top' alt="" />
                                  <div className={`${style.layer}`}>
                                      
                                  </div>
                              </div>
                              <div >
                                  <div className='d-flex justify-content-between mt-1'>
                                      
                                  <p className='fs-4 fw-semibold text-start'>Small Box</p>
                                  <span className={`${style.price} 'fs-5 fw-semibold text-end`}>EGP 800.00</span>
                                  
                                  </div>
                                  <h6 className='text-muted text-start'>Contact us to get your box ready</h6>

                              <div className={`${style.cartContainer} d-flex justify-content-between my-1`}>

<button onClick = {()=>{navigate('/contact')}} className={`btn btn-outline-success    btn-sm text-start ${style.button}`}> <i class="fa-solid fa-phone-volume"></i> Contact</button>
<button onClick = {()=>{navigate('/smallbox')}} className={`btn btn-outline-success    btn-sm text-start ${style.button}`}><Icon path={mdiFormatListBulleted} size={1} className={`${style.cart}`}/> Details</button>

</div>
                              </div>
                             
                          </div>

                      </div>
                      <div className="col-md-4">
                          <div className={`${style.boxSmall}  p-2 shadow `}>
                              <div className={`${style.imgBox2} position-relative `}>
                                  
                                  <img src="images/Boxes/small.png" className='translate-middle card-img-top' alt="" />
                                  <div className={`${style.layer}`}>
                                      
                                  </div>
                              </div>
                              <div >
                                  <div className='d-flex justify-content-between mt-1'>
                                      
                                  <p className='fs-4 fw-semibold text-start'>Medium Box</p>
                                  <span className={`${style.price} 'fs-5 fw-semibold text-end`}>EGP 1200.00</span>
                                  </div>
                                  <h6 className='text-muted text-start'>Contact us to get your box ready</h6>

                              <div className={`${style.cartContainer} d-flex justify-content-between my-1`}>

                              <button onClick = {()=>{navigate('/contact')}} className={`btn btn-outline-success    btn-sm text-start ${style.button}`}> <i class="fa-solid fa-phone-volume"></i> Contact</button>
                              <button onClick = {()=>{navigate('/mediumbox')}} className={`btn btn-outline-success    btn-sm text-start ${style.button}`}><Icon path={mdiFormatListBulleted} size={1} className={`${style.cart}`}/> Details</button>

</div>
                              </div>
                             
                          </div>

                      </div>
                      <div className="col-md-4">
                          <div className={`${style.boxSmall}  p-2 shadow `}>
                              <div className={`${style.imgBox3} position-relative `}>
                                  
                                  <img src="images/Boxes/big.png" className='translate-middle card-img-top' alt="" />
                                  <div className={`${style.layer}`}>
                                      
                                  </div>
                              </div>
                              <div >
                                  <div className='d-flex justify-content-between mt-1'>
                                      
                                  <p className='fs-4 fw-semibold text-start'>Large Box</p>
                                  <span className={`${style.price} 'fs-5 fw-semibold text-end`}>EGP 1600.00</span>
                                  </div>
                                  <h6 className='text-muted text-start'>Contact us to get your box ready</h6>

                                  <div className={`${style.cartContainer} d-flex justify-content-between my-1`}>

                                  <button onClick = {()=>{navigate('/contact')}} className={`btn btn-outline-success    btn-sm text-start ${style.button}`}> <i class="fa-solid fa-phone-volume"></i> Contact</button>
                                  <button onClick = {()=>{navigate('/largebox')}}  className={`btn btn-outline-success    btn-sm text-start ${style.button}`}><Icon path={mdiFormatListBulleted} size={1} className={`${style.cart}`}/> Details</button>
                                  
                                  </div>
                              </div>
                             
                          </div>

                      </div>

                  </div>
              </div>
          </div>
          


    </>
  )
}
