import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVegetables } from '../../Store/slices/ApiVegitables'
import { getFruits } from '../../Store/slices/ApiFruits'
import { getMeat } from '../../Store/slices/ApiMeat'
import { getMilk } from '../../Store/slices/ApiMilk'
import { getHerbals } from '../../Store/slices/ApiHerbals'
import IsLoading from '../isLoading/IsLoading'
import ProductItem from '../ProductItem/ProductItem'
import style from './AllProducts.module.css'
import { useNavigate } from 'react-router-dom'


export default function AllProducts() {


   

    const { vegetables , isLoading}  = useSelector((state)=>state.vegetablesSlice)
    const { fruits}  = useSelector((state)=>state.fruitsSlice)
    const { meat}  = useSelector((state)=>state.meatSlice)
    const { milk}  = useSelector((state)=>state.milkSlice)
    const { herbals}  = useSelector((state)=>state.herbalsSlice)
   

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getVegetables('vegetable'));
        dispatch(getFruits('fruits'))
        dispatch(getMeat('meat'))
        dispatch(getMilk('milk'))
        dispatch(getHerbals('herbals'))
    
    }, [])
    

    


    return (
        <>
            <section className={`${style.secBg} bg-primary`}>
                <div className={`bg-danger position-relative bg-danger `}>


                    <div className={`${style.cover} w-100 poition-absolute top-0 end-0 start-0`}></div>
                    <div className={`${style.caption}   position-absolute p-3`}>
                        <h1 className='fw-Semibold text-center '>Start Shopping</h1>
                

                    </div>
                </div>
            </section>

            <div className='bg-light'>
                

            <section >
                <div className="container">
                    <div className="row my-5 g-3">
                            {isLoading ? <IsLoading/> : <>
                            <div className="col-md-6 d-flex align-items-center">
                            <div className={`${style.item} w-75  text-start`}>
                                <div className={`${style.brdr} w-25 mt-4`} ></div>
                                <h2 className={`${style.h2} text-muted fw-bold`}>Eating <span className={`${style.fruits}`}>vegetables</span>  <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat vegetables as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                {/* <button className={` btn  rounded-pill ${style.butn} text-white`}>Show More</button> */}
                                <button onClick={()=>navigate('/vegetables')} className={`${style.butn} btn  rounded-pill text-white`}>Show More</button>
                            
                                <div className={`${style.brdr} w-100 mt-4`}></div>
                            </div>
                        </div>  
                            {vegetables.slice(0,10).map((product, index) => {
                                return <ProductItem key={product._id} product={product} />
                            })}</>}
                    </div>
                </div>
            </section>
       
            <section >
                <div className="container">
                <hr />
                    <div className="row my-5 g-3">
                            {isLoading ? <IsLoading/> : <>
                            <div className="col-md-6 d-flex align-items-center">
                            <div className={`${style.item} w-75  text-start`}>
                                <div className={`${style.brdr} w-25 mt-4`} ></div>
                                <h2 className={`${style.h2} text-muted fw-bold`}>Eating <span className={`${style.fruits}`}>Fruits</span>  <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat Fruits as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                <button onClick={()=>navigate('/fruits')} className={`${style.butn} btn  rounded-pill text-white`}>Show More</button>
                            
                                <div className={`${style.brdr} w-100 mt-4`}></div>
                            </div>
                        </div>  
                            {fruits.slice(0,10).map((product, index) => {
                                return <ProductItem key={product._id} product={product} />
                            })}</>}
                    </div>
                </div>
            </section>
       
            <section >
                <div className="container">
                <hr />
                    <div className="row my-5 g-3">
                            {isLoading ? <IsLoading/> : <>
                            <div className="col-md-6 d-flex align-items-center">
                            <div className={`${style.item} w-75  text-start`}>
                                <div className={`${style.brdr} w-25 mt-4`} ></div>

                                <h2 className={`${style.h2} text-muted fw-bold`}>Eating <span className={`${style.fruits}`}>Milk <br /> Products</span>  <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat Fruits as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                {/* <button className={` btn  rounded-pill ${style.butn} text-white`}>Show More</button> */}
                                <button onClick={()=>navigate('/milk')} className={`${style.butn} btn  rounded-pill text-white`}>Show More</button>
                            
                                <div className={`${style.brdr} w-100 mt-4`}></div>
                            </div>
                        </div>  
                            {milk.slice(0,10).map((product, index) => {
                                return <ProductItem key={product._id} product={product} />
                            })}</>}
                    </div>
                </div>
            </section>
       
            <section >
                <div className="container">
                <hr />
                    <div className="row my-5 g-3">
                            {isLoading ? <IsLoading/> : <>
                            <div className="col-md-6 d-flex align-items-center">
                            <div className={`${style.item} w-75  text-start`}>
                                <div className={`${style.brdr} w-25 mt-4`} ></div>
                                <h2 className={`${style.h2} text-muted fw-bold`}>Eating <span className={`${style.fruits}`}>Meat</span>  <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat Meat as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                {/* <button className={` btn  rounded-pill ${style.butn} text-white`}>Show More</button> */}
                                <button onClick={()=>navigate('/meat')} className={`${style.butn} btn  rounded-pill text-white`}>Show More</button>
                            
                                <div className={`${style.brdr} w-100 mt-4`}></div>
                            </div>
                        </div>  
                            {meat.slice(0,10).map((product, index) => {
                                return <ProductItem key={product._id} product={product} />
                            })}</>}
                    </div>
                </div>
            </section>
            <section >
            <div className="container">
            <hr />
                    <div className="row my-5 g-3">
                            {isLoading ? <IsLoading/> : <>
                            <div className="col-md-6 d-flex align-items-center">
                            <div className={`${style.item} w-75  text-start`}>
                                <div className={`${style.brdr} w-25 mt-4`} ></div>
                                <h2 className={`${style.h2} fw-bold`}>Organic Herbals <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat vegetables as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                <h2 className={`${style.h2} text-muted fw-bold`}>Drinking <span className={`${style.fruits}`}>Herbals</span>  <br /> provides <br />health benefits  </h2>
                                <h5 className={`${style.h5} mt-4`}>People who eat Herbals as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                                {/* <button className={` btn  rounded-pill ${style.butn} text-white`}>Show More</button> */}
                                <button onClick={()=>navigate('/herbals')} className={`${style.butn} btn  rounded-pill text-white`}>Show More</button>
                            
                                <div className={`${style.brdr} w-100 mt-4`}></div>
                            </div>
                        </div>  
                            {herbals.slice(0,10).map((product, index) => {
                                return <ProductItem key={product._id} product={product} />
                            })}</>}
                    </div>
                </div>
            </section>
       
            </div>
        </>
    )
}
