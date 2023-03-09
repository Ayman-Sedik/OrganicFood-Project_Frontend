import React, { useEffect, useState } from "react";
import style from './Navbar.module.css'
import Icon from '@mdi/react';
import {  mdiCartArrowDown } from '@mdi/js';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { fireLogin } from "../../Store/login/loginSlice";
export default function Navbar() {



	const navigate = useNavigate()
	const { cartItem } = useSelector((state) => state.cartSlice)
	const { isLogin } = useSelector((state) => state.loginSlice)
	let dispatch = useDispatch()

	let [userName, setUserName] = useState('')
	
	
	let logOut = () => {
		dispatch(fireLogin(false))
		localStorage.removeItem('token')
		navigate('/login')
		
		
	}
	

	let totalQty = cartItem.reduce((x, y) => x + y.qty, 0)
	let totalPrice = cartItem.reduce((x, y) => x + y.qty * y.price, 0)
	useEffect(() => {
		
		if (localStorage.getItem('token')) {
			
			let userData = jwtDecode(localStorage.getItem('token'))
			console.log(userData)
		
		setUserName(userData.first_name)
			console.log(userName)
			
	}
	})
	return (
		<>

			<header className="fixed-top bg-white">

				<nav className="navbar d-lg-none border-bottom ">
					<div className={`container-fluid justify-content-center`}>



						<a className="navbar-brand" href="#">
						{!isLogin ? <img src="images/Logo.png" alt="Bootstrap" width={150} /> :<div className="d-flex align-items-center"> <div className={`${style.defaultColor}  rounded-circle py-4 px-4 d-flex justify-content-center align-items-center position-relative`}>
								<span className={`position-absolute text-white fw-semibold`}>{userName.charAt(0).toUpperCase()}</span>
							</div> <p className=" m-0 ms-2 text-muted fw-semibold">Hello {userName}</p> </div>}
						</a>



					</div>
				</nav>


				<nav className="navbar navbar-expand-lg py-3 shadow-sm ">
					<div className={`container-fluid ${style.containerWidth}`}>

						<a className="navbar-brand d-none d-lg-block" href="#">
							{!isLogin ? <img src="images/Logo.png" alt="Bootstrap" width={150} /> :<div className="d-flex align-items-center"> <div className={`${style.defaultColor}  rounded-circle py-4 px-4 d-flex justify-content-center align-items-center position-relative`}>
								<span className={`position-absolute text-white fw-semibold`}>{userName.charAt(0).toUpperCase()}</span>
							</div> <p className=" m-0 ms-2 text-muted fw-semibold">Hello {userName}</p> </div>}
						</a>

						<div className="d-lg-none  d-flex align-items-center  justify-content-between w-100">
							<form className="d-flex position-relative me-2" role="search">
								<input
									className=" form-control brdrSearch "
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className={`btn btn-success position-absolute end-0 ${style.btnSearch} `}
									type="submit"
								>
									<i class="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>


							<div className="d-flex align-items-center">
								<div className="  d-flex align-items-center justify-content-center responsiveCounter">
									<div className="cartContainer  d-flex justify-content-center align-items-center  ">

										<div className=" position-relative d-flex  align-items-center ">

											<Icon path={mdiCartArrowDown} size={2} className={`${style.cart}`} />
											<span className={`${style.counter} position-absolute`}>

												{totalQty}

											</span>
										</div>

										<span className={`${style.price} me-3`}>{totalPrice.toFixed(2)} EGP</span>
									</div>

								</div>



								<div class="dropdown position-relative">

									<a className="nav-link " data-bs-toggle="dropdown" aria-expanded="false" href="#">

										{/* <i class="fa-solid fa-gear "></i> */}
										<i class={`fa-solid fa-gears  fs-5 ${style.setting}`}></i>
										{/* <i class="fa-solid fa-ellipsis ms-5 fs-5"></i> */}

									</a>
									<ul className={`${style.drobDown} dropdown-menu dropdown-menu-lg-end pull-right  dropdown-menu-end ${style.dropSetting}`}>
									{ isLogin? <li><span onClick={logOut} className={`${style.logout} nav-link  text-muted`}  >
										Logout
									</span></li>:<><li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark "
													: "nav-link text-muted"
											} to={'/login'}>Login</NavLink></li>
									<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link text-muted"
											} to={'/register'}>Register</NavLink></li></>}
									</ul>
								</div>
								<button
									className="navbar-toggler ms-3"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									// aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon" />
								</button>
							</div>
						</div>





						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mx-auto ">
								<li className="nav-item mx-3">
									<NavLink className="nav-link" to={'/'}>
										Home
									</NavLink>
								</li>
								<li className="nav-item mx-3">

									<div class="dropdown">
										<a class="dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											Products
										</a>
										<ul class="dropdown-menu nav-item">
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'products'}>All Products</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'vegetables'}>Vegetables</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'fruits'}>Fruits</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'herbals'}>Herbals</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'meat'}>Meat</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'milk'}>Milk</NavLink></li>
										</ul>
									</div>

								</li>

								<li className="nav-item mx-3">
									<NavLink className="nav-link" to={'/about'}>
										About
									</NavLink>
								</li>
								<li className="nav-item mx-3">
									<NavLink className="nav-link" to={'/contact'}>
										Contact
									</NavLink>
								</li>
								<li className="nav-item mx-3">

									<div class="dropdown">
										<a class="dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown" aria-expanded="false">
											Diseases details
										</a>
										<ul class="dropdown-menu nav-item ">
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'heart'}>Heart disease</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'diabetes'}>Diabetes disease</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'liver'}>Liver disease</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'kidney'}>Kidney disease</NavLink></li>
											<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link"
											} to={'pressure'}>Pressure disease</NavLink></li>
											
										</ul>
									</div>

								</li>



								<li className="nav-item mx-3">

								</li>

							</ul>


						</div>



						<div className="d-flex align-items-center d-none d-lg-flex">
							<form className="d-flex position-relative me-2" role="search">
								<input
									className=" form-control brdrSearch "
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className={`btn btn-success position-absolute end-0 ${style.btnSearch} `}
									type="submit"
								>
									<i class="fa-solid fa-magnifying-glass"></i>
								</button>
							</form>


							<div className="  d-flex align-items-center justify-content-center responsiveCounter">
								<div className="cartContainer  d-flex justify-content-center align-items-center  ">

									<div className=" position-relative d-flex  align-items-center ">

										{/* <Icon path={mdiCartArrowDown} size={2} className={`${style.cart}`} />
										<div className={`${style.counter} position-absolute`}>
											100
										</div>
										<div className={`${style.mano}`}>50</div> */}
										<div className={`position-relative d-flex  align-items-center ${style.cartIcon}`} onClick={() => {
											navigate('/cart')
										}}>

											<Icon path={mdiCartArrowDown} size={2} className={`${style.cart}`} />
											<span className={`${style.counter} position-absolute`}>

												{totalQty}

											</span>
										</div>

									</div>

									<span className={`${style.price} me-3`}>{totalPrice.toFixed(2)} EGP</span>
								</div>
							</div>



							<div class="dropdown position-relative">

								<a className="nav-link " data-bs-toggle="dropdown" aria-expanded="false" href="#">

									{/* <i class="fa-solid fa-gear "></i> */}
									<i class={`fa-solid fa-gears  fs-5 ${style.setting}`}></i>
									{/* <i class="fa-solid fa-ellipsis ms-5 fs-5"></i> */}

								</a>
								<ul className={`${style.drobDown} dropdown-menu dropdown-menu-lg-end pull-right  dropdown-menu-end ${style.dropSetting}`}>
									
									{ isLogin? <li><span onClick={logOut} className={`${style.logout} nav-link  text-muted`}  >
										Logout
									</span></li>:<><li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark "
													: "nav-link text-muted"
											} to={'/login'}>Login</NavLink></li>
									<li><NavLink className={({ isActive, isPending }) =>
												isActive
													? "nav-link text-dark"
													: "nav-link text-muted"
											} to={'/register'}>Register</NavLink></li></>}
								</ul>
							</div>

						</div>






					</div>

				</nav>
			</header>
		</>
	);
}



