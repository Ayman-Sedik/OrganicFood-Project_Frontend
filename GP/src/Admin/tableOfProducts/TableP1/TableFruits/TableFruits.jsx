import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFruits, getFruits } from '../../../../Store/slices/ApiFruits'
// import { deleteVegetables, getVegetables } from '../../../Store/slices/ApiVegitables'
import style from './TableFruits.module.css'
export default function TableFruits() {

    const { fruits, isLoading } = useSelector((state) => state.fruitsSlice)
    let navigate = useNavigate()

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getFruits());



    }, [])


    let deleteProduct = (id) => {
    //    vegetables = vegetables.filter((item, index) => {
    //         return item._id != id
    //     })
        dispatch(deleteFruits(id));
    }
    return (
        <>
            <div class=" ">
                <div class="container py-5">
                    <div className='text-end'>
                        <button onClick={() => { navigate('/admin/addInFruits') }} className='btn btn-primary btn-lg m-2 '><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="">
                    <h2 className='text-center fs-1 text-muted py-2'>Fruits</h2>

                        <table class="table w-100  text-center  ">
                            <thead class={`${style.tableHead} `}>
                                <tr class=" py-5">
                                    <th class=" py-4">id</th>
                                    <th className=''>Image</th>
                                    <th className=''>Title</th>
                                    <th className=''>Price</th>
                                    <th className=''>Quantity</th>
                                    <th className=''>Description</th>
                                    <th class=" ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fruits.map(
                                    (product, index) => {
                                        return (<tr className='fw-semibold text-muted ' key={product._id}>
                                            <td className={` fs-5 p-0 border`}>{index + 1}</td>
                                            <td className={` fs-5    border`}><img className={`${style.img}`} src={product.src} alt="" /></td>
                                            <td className={` fs-5 p-0 border`}>{product.name}</td>
                                            <td className={` fs-5 p-0 border`}>{product.price} EGP/KG</td>
                                            <td className={` fs-5 p-0  border`}>{product.quantity}</td>
                                            <td className={` fs-6 w-25 border`}>{product.desc}</td>
                                            <td className={` fs-1  border p-0 w-25  `}>
                                                <button class="btn btn-secondary mx-1 fs-5" onClick={() => { navigate(`/admin/detailsFruits/${product._id}`) }}  ><i class="fa-solid fa-circle-info"></i></button>
                                                <button class="btn btn-warning mx-1 fs-5" onClick={() => { navigate(`/admin/addInFruits/${product._id}`) }} ><i class="fa-solid fa-pen-to-square"></i></button>
                                                <button class="btn btn-danger mx-1 fs-5"  onClick={()=>{deleteProduct(product._id)}}><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>)
                                    }
                                )}



                            </tbody >

                        </table >


                    </div>






                </div >
            </div >


        </>

    )
}
