import React, { useState } from 'react'
import style from './Cart.module.css'
import { IoIosBasket } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { HiShieldCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { decreamentItem, deleteItem, increamentItem } from '../../Store/cartData/cart';
import { useNavigate } from 'react-router-dom';
// import { mdiDelete } from '@mdi/js';

export default function Cart() {



    let [delivery, setDelivery] = useState(20)
    let [taxes, setTaxes] = useState(0)
    const { cartItem } = useSelector((state) => state.cartSlice)

    let navigate = useNavigate()


    const dispatch = useDispatch()
    let totalQty = cartItem.reduce((x, y) => x + y.qty, 0)
    let totalPrice = cartItem.reduce((x, y) => x + y.qty * y.price, 0)
    let finalPrice = totalPrice + taxes + delivery




    return (
        <>


            <div class=" ">
                <div class="container py-5">
                    <h2 className={` ${style.h1Color} text-muted`}><span className={`${style.iconBasket}`}><IoIosBasket /></span> SHOPPING CART</h2>
                    <div className="row  pb-5 g-4">
                        <div className="col-sm-9">



                            {cartItem.length === 0 ? <div className='alert alert-success p-5 m-5 d-flex justify-content-center align-items-center'>
                                <h2>Your Cart Is Empty</h2>
                            </div> : <div className={`${style.tableContainer}`}>



                                <table class="table w-100 rounded text-center  ">
                                    <thead class={`${style.tableHead}  `}>
                                        <tr class=" py-5">
                                            <th class=" py-5">id</th>
                                            <th className='py-5'>Image</th>
                                            <th className='py-5'>Title</th>
                                            <th className='py-5'>Price</th>
                                            <th className='py-5'>Quantity</th>
                                            <th class=" py-5">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItem.map((value, index) => {
                                            return (
                                                <>
                                                    <tr key={value._id} className='fw-semibold text-muted '>
                                                        <td className={`py-3 fs-5  border   `}>{index + 1}</td>
                                                        <td className={`py-3 fs-5  border  `}><img className={`${style.img}`} src={value.src} alt="" /></td>
                                                        <td className={`py-3 fs-5 text-capitalize  border  `}>{value.name}</td>
                                                        <td className={`py-3 fs-5  border  `}>{value.price}</td>
                                                        <td className={`py-3 fs-5  border  `}>
                                                            <div className={`${style.wrapper}  d-flex  mx-auto `}>

                                                                <div className={`${style.counterNum}   text-dark d-flex justify-content-center align-items-center fw-bold   `}>
                                                                    {value.qty}
                                                                </div>


                                                                <div className={`${style.counter} border-start`}>
                                                                    <div onClick={() => {
                                                                        dispatch(increamentItem(value))
                                                                    }}
                                                                        className={`${style.plus}   border-bottom d-flex justify-content-center align-items-center fw-bold `} >
                                                                        +
                                                                    </div>
                                                                    <div onClick={() => {
                                                                        dispatch(decreamentItem(value))
                                                                    }} className={`${style.minus}   d-flex justify-content-center align-items-center fw-bold `}>
                                                                        -
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td className={`py-3 fs-1  border text-danger  `}>
                                                            <MdDelete className={`${style.curserPointer}`} onClick={() => { dispatch(deleteItem(value)) }} />
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody >

                                    </table >

                                    

                            </div>}

                        </div>
                        <div className="col-sm-3  shadow-sm">
                            <div className="container py-3">

                                <div className={`${style.checkoutList} text-white rounded fw-semibold pt-5 pb-3  mb-4   `}>
                                    <div className={`d-flex justify-content-evenly align-items-center py-1`}>
                                        <span className={`ps-3`}>Quantity Products</span>
                                        <span className={`pe-3`}>{totalQty}</span>
                                    </div>
                                    <div className={`d-flex justify-content-between align-items-center py-1`}>
                                        <span className={`ps-3`}>price</span>
                                        <span className={`pe-3`}>{totalPrice.toFixed(2)} EGP</span>
                                    </div>
                                 
                                    <div className={`d-flex justify-content-between align-items-center py-1`}>
                                        <span className={`ps-3`}>Taxes</span>
                                        <span className={`pe-3 `}>{taxes.toFixed(2)} EGP</span>
                                    </div>
                                    {cartItem.length === 0 ? '' :    <div className={`d-flex justify-content-between align-items-center py-1`}>
                                    <span className={`ps-3`}>Delivery</span>
                                    <span className={`pe-3 `}>{totalPrice > 500 ? 'free' : <>{delivery.toFixed(2)} EGP</>}</span>
                                </div>}
                                    <hr className='w-75 mx-auto my-2  text-white ' />
                                    {cartItem.length === 0 ? '' : <div className={`d-flex justify-content-between align-items-center py-1`}>
                                    <span className={`ps-3`}>Total Price</span>
{totalPrice > 500? <span className='pe-3'>{(totalPrice).toFixed(2)} EGP</span> :<span className={`pe-3 `}>{(finalPrice).toFixed(2)} EGP </span>
}
                                    </div>}
                                    <div className={`${style.btnContainer} text-center py-2`}>
                                        <button onClick={() => {
                                            navigate('/checkout')
                                        }} className={`${style.btnCheckout}  p-1 px-2 text-white btn  `}>Checkout</button>
                                    </div>
                                </div>
                                <div className={`${style.infoCart} bg-light fs-6 p-1 text-muted  mb-1`}>
                               <HiShieldCheck className='text-dark fs-4'/>  Security policy (edit with Customer reassurance module)
                              </div>
                                <div className={`${style.infoCart} bg-light fs-6 p-1 text-muted  mb-1`}>
                                <i class="fa-solid fa-truck fs-6 text-dark"></i> Delivery policy (edit with Customer reassurance module)
                              </div>
                                <div className={`${style.infoCart} bg-light fs-6 p-1 text-muted  mb-1`}>
                                <i class="fa-solid fa-arrow-right-arrow-left fs-6 text-dark "></i> Return policy (edit with Customer reassurance module)
                              </div>
                            </div>

                        </div>
                    </div>


                </div >
            </div >

        </>
    )
}


