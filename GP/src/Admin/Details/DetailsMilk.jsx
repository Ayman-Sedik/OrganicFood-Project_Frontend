
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import IsLoading from '../../Components/isLoading/IsLoading'
import { getMilk } from '../../Store/slices/ApiMilk'
import style from './Detail.module.css'

export default function DetailsMilk() {
    const { milk, isLoading } = useSelector((state) => state.milkSlice)
    let navigate = useNavigate()

    let [product, setProduct] = useState([])

    const dispatch = useDispatch()
    let { id } = useParams()
    console.log(id)
    useEffect(() => {

        dispatch(getMilk());


        let obj = milk.filter((item, index) => {
            return item._id == id
        })

        setProduct(obj)


    }, [])

    useEffect(() => { console.log(product) }, [product])










    return (

        <>
        <div className="container">
            {product.length == 0 ? <IsLoading /> : <>

                <div className="row">
                    <div className="col-md-5">
                        <img className='w-100 mt-5' src={product[0].src} alt="" />
                    </div>
                    <div className="col-md-7  ">
                        <h2 className='mt-5 mb-4 fw-bold text-primary text-capitalize '>{product[0].name}</h2>
                        <ul className={`${style.list} text-dark fs-4 fw-bold `}>
                            <li >Price : <span className='text-success fw-semibold'> {product[0].price}</span></li>
                            <li>Quantity :<span className='text-success fw-semibold'>  {product[0].quantity}</span></li>
                            <li>Description: <span className='text-muted fw-semibold '>{product[0].desc}</span></li>


                        </ul>
                    </div>
                </div>

            </>}
            </div>
        </>



    )
}
