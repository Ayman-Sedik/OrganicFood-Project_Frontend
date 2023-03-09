import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IsLoading from '../../isLoading/IsLoading'
import { getMeat } from '../../../Store/slices/ApiMeat'
import ProductItem from '../../ProductItem/ProductItem'
import ReactPaginate from 'react-paginate'

import style from './Meat.module.css'

export default function Meat() {
    const { meat,isLoading}  = useSelector((state)=>state.meatSlice)
    const [pageNumber , setPageNumber] = useState(0)

    const productPerPage = 12;
    const pagesVisted = pageNumber * productPerPage
    
    const displayProducts = meat.slice(pagesVisted , pagesVisted + productPerPage).map(
      (product)=>{
        return (<ProductItem key={product._id} product={product} />)
      }
    )
  
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMeat('meat'))
       
    
    }, [])
    const pageCount = Math.ceil(meat.length / productPerPage);
    const changePage = ({selected})=>{
      setPageNumber(selected)
    }
  return (
    <>
    <section className={`${style.secBg} bg-primary`}>
                <div className={`bg-danger position-relative bg-danger `}>


                    <div className={`${style.cover} w-100 poition-absolute top-0 end-0 start-0`}></div>
                    <div className={`${style.caption}   position-absolute p-3`}>
                        <h1 className='fw-Semibold text-center '>Meat</h1>
                

                    </div>
                </div>
      </section> 
      <section >
                <div className="container">
                    <div className="row my-5 g-3">
                    <div className="col-md-6 d-flex align-items-center">
                    <div className={`${style.item} w-75  text-start`}>
                        <div className={`${style.brdr} w-25 mt-4`} ></div>
                        <h2 className={`${style.h2} text-muted fw-bold`}>Eating <span className={`${style.fruits}`}>Meat</span>  <br /> provides <br />health benefits  </h2>
                        <h5 className={`${style.h5} mt-4`}>People who eat Meat as part of an overall healthy diet are likely to have a reduced risk of some diseases.</h5>
                    
                        <div className={`${style.brdr} w-100 mt-4`}></div>
                    </div>
                </div>
                    {isLoading ? <IsLoading/> : <>
                    {displayProducts}
                                </>}
                                <div className='mt-5 d-flex justify-content-center'>
                                <ReactPaginate
                                previousLabel={`Previous`}
                                nextLabel={`Next`}
                                breakLabel={`...`}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={`${style.paginationBttns} `}
                                previousLinkClassName={`${style.previousBttn}`}
                                nextLinkClassName={`${style.nextBttn}`}
                                disabledClassName = {`${style.paginationDisabled}`}
                                activeClassName={`${style.paginationActive} text-white`}
                                />
                                </div>
                    </div>
                </div>
            </section>
    </>
  )
}
