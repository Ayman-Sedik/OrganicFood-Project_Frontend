import React, { useEffect, useRef } from 'react'
import style from './Meals.module.css'
import { useDispatch, useSelector } from 'react-redux';
import IsLoading from '../../isLoading/IsLoading';
import { getMeals } from '../../../Store/Meals/Meals';
import { useNavigate } from 'react-router-dom';

export default function Meals() {


  const { meals, isLoading } = useSelector((state) => state.mealsSlice)

let data = meals
  let one = meals[0]
  let two = meals[1]
  let three = meals[2]
  let four = meals[3]
  let five = meals[4]
  

  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(getMeals());
  }, [])










  return (
    <>

      <div className='container mt-5'>
        {data.length == 0 ? <IsLoading /> : <>
          <div className='row '>
            <div className='col-md-4 mt-5 d-flex align-items-start'>
              <img src={one.src} className='w-100 rounded ' alt="Lemon chicken" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 mt-1 text-truncate '>{one.name}</h3>
              <h5 className='px-3'>Ingredient :-</h5>
              <ul class=" ">
            {one.ingredient.map((step)=>(<li class="text-start pb-1">{step}</li>))}
              
           
              </ul>

            </div>
          </div>
            <div className="row">
            <h3 className='fs-3 text-start'>Cooking steps :</h3>
            <ul class=" ">
            {one.desc.map((step)=>(<li class="text-start me-2">{step}</li>))}
            </ul>
            </div>
            <hr />
            <hr />
          <div className='row '>
            <div className='col-md-4 mt-5 d-flex align-items-start'>
              <img src={two.src} className='w-100 rounded ' alt="Lemon chicken" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 mt-1 text-truncate '>{two.name}</h3>
              <h5 className='px-3'>Ingredient :-</h5>
              <ul class=" ">
            {two.ingredient.map((step)=>(<li class="text-start pb-1">{step}</li>))}
              
           
              </ul>

            </div>
          </div>
            <div className="row">
            <h3 className='fs-3 text-start'>Cooking steps :</h3>
            <ul class=" ">
            {two.desc.map((step)=>(<li class="text-start me-2">{step}</li>))}
            </ul>
            </div>
            <hr />
            <hr />
          <div className='row '>
            <div className='col-md-4 mt-5 d-flex align-items-start'>
              <img src={three.src} className='w-100 rounded ' alt="Lemon chicken" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 mt-1 text-truncate '>{three.name}</h3>
              <h5 className='px-3'>Ingredient :-</h5>
              <ul class=" ">
            {three.ingredient.map((step)=>(<li class="text-start pb-1">{step}</li>))}
              
           
              </ul>

            </div>
          </div>
            <div className="row">
            <h3 className='fs-3 text-start'>Cooking steps :</h3>
            <ul class=" ">
            {three.desc.map((step)=>(<li class="text-start me-2">{step}</li>))}
            </ul>
            </div>
            <hr />
            <hr />
          <div className='row '>
            <div className='col-md-4 mt-5 d-flex align-items-start'>
              <img src={four.src} className='w-100 rounded ' alt="Lemon chicken" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 mt-1 text-truncate '>{four.name}</h3>
              <h5 className='px-3'>Ingredient :-</h5>
              <ul class=" ">
            {four.ingredient.map((step)=>(<li class="text-start pb-1">{step}</li>))}
              
           
              </ul>

            </div>
          </div>
            <div className="row">
            <h3 className='fs-3 text-start'>Cooking steps :</h3>
            <ul class=" ">
            {four.desc.map((step)=>(<li class="text-start me-2">{step}</li>))}
            </ul>
            </div>
            <hr />
            <hr />
          <div className='row '>
            <div className='col-md-4 mt-5 d-flex align-items-start'>
              <img src={five.src} className='w-100 rounded ' alt="Lemon chicken" />
            </div>
            <div className='col-md-8'>
              <h3 className='p-3 mt-1 text-truncate '>{five.name}</h3>
              <h5 className='px-3'>Ingredient :-</h5>
              <ul class=" ">
            {five.ingredient.map((step)=>(<li class="text-start pb-1">{step}</li>))}
              
           
              </ul>

            </div>
          </div>
            <div className="row">
            <h3 className='fs-3 text-start'>Cooking steps :</h3>
            <ul class=" ">
            {five.desc.map((step)=>(<li class="text-start me-2">{step}</li>))}
            </ul>
            </div>
            
      
        </>}
      </div>

    </>
  )
}
