import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addFruits, editeFruits } from '../../../../Store/slices/ApiFruits'
// import { addVegetables, editeVegetables } from '../../../Store/slices/ApiVegitables'
import style from './AddFruits.module.css'
export default function AddInFruits() {


    // src: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",

    let { id } = useParams();
    console.log(id)
    let [formValue, setFormValue] = useState({

        type: "fruits",
        src: "",
        name: "",
        desc: "test test test",
        price: 0,
        offer: 10,
        quantity: 0,
    })

    let dispatch = useDispatch()
    let navigate = useNavigate()
    const addNewProduct = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(addFruits(formValue)).then(navigate('/fruits')).catch((err) => { })

    }
    const editeProduct = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(editeFruits({ id, formValue })).then(navigate('/fruits')).catch((err) => { })

    }

    const operationHandler = ({ target }) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        })
    }
    let { edited } = useSelector((state) => state.fruitsSlice)



    return (
        <>


            <div>
                <div className="container my-5">
                    <div className="row">
                        <h2 className={`  text-muted text-center mb-4`}> { id?<span className='fs-1 fw-bold text-uppercase text-warning'><i class="fa-solid fa-screwdriver-wrench text-dark"></i> Edite</span>:<span className='fs-1 fw-bold text-uppercase text-success'><i class="fa-solid fa-plus text-dark"></i> Add</span>} Product</h2>
                        <div className={`${style.form} py-3 mx-auto  border rounded`}>
                            <form className={` px-3 py-4`} >

                                {/* <label className="fs-5 text-muted" htmlFor="type">
                                        Product type
                                    </label>

                                    <input
                                        onChange={operationHandler}
                                        type="text"
                                        name="type"
                                        className={`${style.inputBox} form-control my-1`}
                                        id="type"
                                    />
                                */}

                                <label className="fs-5 text-muted" htmlFor="src">
                                    Product image
                                </label>

                                <input
                                    onChange={operationHandler}
                                    type="text"
                                    name="src"
                                    className={`${style.inputBox} form-control my-1`}
                                    id="src"
                                />

                                <label className="fs-5 text-muted" htmlFor="name">
                                    Product Name
                                </label>

                                <input
                                    onChange={operationHandler}
                                    type="text"
                                    name="name"
                                    className={`${style.inputBox} form-control my-1`}
                                    id="name"

                                />
                                <label className="fs-5 text-muted" htmlFor="offer">
                                    Product offer
                                </label>

                                <input
                                    onChange={operationHandler}
                                    type="text"
                                    name="offer"
                                    className={`${style.inputBox} form-control my-1`}
                                    id="offer"
                                />

                                <label className="fs-5 text-muted" htmlFor="price">
                                    Price
                                </label>

                                <input
                                    onChange={operationHandler}
                                    type="text"
                                    name="price"
                                    className={`${style.inputBox} form-control  my-1`}
                                    id="price"

                                />
                                <label className="fs-5 text-muted" htmlFor="quantity">
                                    Quantity
                                </label>

                                <input
                                    onChange={operationHandler}
                                    type="type"
                                    name="quantity"
                                    className={`${style.inputBox} form-control  my-1`}
                                    id="quantity"

                                />


                                <div className="col-12">
                                    {/* {id?   <button onClick={editeProduct} type="submit" className={`${style.btn} float-end btn mt-2`}>
                                        edite Product
                                    </button> :  <button onClick={addNewProduct} type="submit" className={`${style.btn} float-end btn mt-2`}>
                                        Add product
                                    </button>} */}
                                    <button onClick={id ? editeProduct : addNewProduct} type="submit" className={`${style.btn} float-end btn mt-2`}>
                                        {id ? 'edite product' : 'Add product'}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>





        </>
    )
}
