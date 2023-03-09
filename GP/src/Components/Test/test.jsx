import React from 'react'

export default function test() {
  return (
    <>



<header className="fixed-top bg-white">
				
                <nav className="navbar shadow-sm ">
                    <div className="container d-flex justify-content-center">
    
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Bootstrap" width={231} />
                        </a>
                    </div>
                </nav>
    
    
                <nav className="navbar navbar-expand-lg py-3  ">
                    <div className="container">
    
    
    
    
                        <form className="d-flex position-relative me-1" role="search">
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
    
                                    <Icon path={mdiCartArrowDown} size={2} className={`${style.cart}`} />
                                    <span className={`${style.counter} position-absolute`}>
                                        <p className={`${style.counterNumber}   position-absolute`}>
                                            20
                                        </p>
                                    </span>
                                </div>
    
                                <span className={`${style.price} me-3`}>$234</span>
                            </div>
                        </div>
    
    
    
    
    
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            // aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
    
    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
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
                                        <ul class="dropdown-menu">
                                            <li><NavLink class="nav-link dropdown-item " to={'products'}>All Products</NavLink></li>
                                            <li><NavLink class="nav-link dropdown-item " to={'products'}>All Products</NavLink></li>
                                            <li><NavLink class="nav-link dropdown-item " to={'products'}>All Products</NavLink></li>
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
                                            Products
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
    
    
                                <li className="nav-item mx-3">
                                    <div class="dropdown position-relative">
    
                                        <a className="nav-link " data-bs-toggle="dropdown" aria-expanded="false" href="#">
    
                                            {/* <i class="fa-solid fa-gear "></i> */}
                                            <i class={`fa-solid fa-gears  fs-5 ${style.setting}`}></i>
                                            {/* <i class="fa-solid fa-ellipsis ms-5 fs-5"></i> */}
    
                                        </a>
                                        <ul className={`dropdown-menu ropdown-menu-lg-end  ${style.dropSetting}`}>
                                            <li><NavLink class="dropdown-item  nav-link" to={'/login'}>Login</NavLink></li>
                                            <li><NavLink class="dropdown-item  nav-link" to={'/register'}>Register</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
    
                            </ul>
    
    
                        </div>
    
    
    
                    </div>
    
                </nav>
                </header>   



    </>
  )
}
