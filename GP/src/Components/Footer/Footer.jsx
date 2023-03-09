import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'
export default function Footer() {
	return (
		<>
			<footer className='bg-light pt-5 pb-3' >
				<div className="container">
					<div className="row">

					

						<div className={`${style.brdr} col-md-4 col-sm-6 mt-5 `}>
					
							<ul className={`${style.list}`}>
								<NavLink to={'/log'} className={`text-decoration-none text-dark`}><li>Log in</li></NavLink>
								<NavLink to={'/register'} className={`text-decoration-none text-dark`}><li>Register</li></NavLink>
								<NavLink to={'/contact'} className={`text-decoration-none text-dark`}><li>Contact us</li></NavLink>
								<NavLink to={'/about'} className={`text-decoration-none text-dark`}><li>About us</li></NavLink>
							
							</ul>
						</div>

						<div className={`${style.brdr} col-md-4 col-sm-6 mt-5`}>
							<ul className={`${style.list}`}>
							<NavLink  to={'/smallbox'} className={`text-decoration-none text-dark`}><li>Small Box</li></NavLink>
							<NavLink to={'/mediumbox'}  className={`text-decoration-none text-dark`}><li>Medium Box</li></NavLink>
							<NavLink to={'/largebox'} className={`text-decoration-none text-dark`}><li>Large Box</li></NavLink>
							<NavLink to={'/meals'} className={`text-decoration-none text-dark`}><li>Meals</li></NavLink>
						
							</ul>
						</div>

						<div className="col-md-4">
							
							<div className={`mb-3 mt-1`}>
								<img src="images/logo.png" alt="" />

							</div>
							<ul className={`${style.list}`}>
							<NavLink className="text-decoration-none text-start "> <li className={`fw-bold text-muted`}><a className="text-decoration-none text-dark"  > <i class="fa-solid fa-phone"></i> : 01000000000</a>  </li> </NavLink>
							<NavLink className="text-decoration-none text-start "> <li className={`fw-bold text-muted`}><a className="text-decoration-none text-dark"  > <i class="fa-solid fa-location-dot"></i> : Cairo-Egypt</a>  </li> </NavLink>
							<NavLink className="text-decoration-none text-start "> <li className={`fw-bold text-muted`}><a className="text-decoration-none text-dark"  > <i class="fa-solid fa-envelope"></i> : contact@organic.com</a>  </li> </NavLink>

								<li className={`fw-bold fs-4`}>Get in Touch:</li>
								
							</ul>

								<div class="icons d-flex  ">
									<div className={`${style.contain} ${style.contain1} fs-5 ms-4 me-3`}>
										<a className='w-100 text-center' href="https://www.facebook.com/" target="_blank">
											<i class="fa-brands fa-facebook-f"></i>
										</a>
									</div>
									<div className={`${style.contain} ${style.contain2} fs-5 me-3`}>
										<a href="https://www.google.com/" target="_blank">
											<i class="fa-brands fa-google"></i>
										</a>
									</div>
									<div className={`${style.contain} ${style.contain3} fs-5 me-3`}>
										<a  href="https://www.youtube.com/" target="_blank">
											<i class=" youtube fa-brands fa-youtube"></i>
										</a>
									</div>
									<div className={`${style.contain} ${style.contain4} fs-5 me-3`}>
										<a href="https://twitter.com/" target="_blank">
											<i class="twitter fa-brands fa-twitter"></i>
										</a>
									</div>
								</div>
						</div>


					</div>


					<div className="row">
						<div className="col-md-4 my-2 ">

						</div>
						<div className="col-md-4 my-2 ">
							<div>
								<img src="images/payment.png" alt="" />
							</div>

						</div>
						<div className="col-md-4 my-2 ">

						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
