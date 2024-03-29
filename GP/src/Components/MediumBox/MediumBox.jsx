import { mdiCartArrowDown } from '@mdi/js';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMediumBox } from '../../Store/mediumBox/MediumBox';
import style from './MediumBox.module.css'
export default function MediumBox() {


  let location = useLocation()

  const { mediumBox, IsLoading } = useSelector((state) => state.mediumBoxSlice)


  let data = mediumBox
  
let navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMediumBox());
    
  }, [])


  
  return (
    <>

      <div className='container'>
      
          <div className={`${style.data} row  `}>
            <div className='col-md-4'>
              <img src="images/Boxes/small.png" className='w-100' alt="heart" />
            </div>
            <div className='col-md-8 '>
              <h3 className={`${style.type} 'p-3 text-capitalize `}>Medium Box</h3>
              <span className={`${style.price} fw-semibold`}>EGP 1200</span>
              <hr />
              <hr />
<p className='text-muted'>The Personal Box contains 14-18 seasonal items, typically 6-7 vegetables, 6 fruits ,3 leaf, 3 meat, 1 herb. Recommended for 1-2 people. Due to the nature of farming in general and organic farming specifically some minor changes might happen to the boxes contents.</p>    
<h6 className='text-muted'>Contact us to get your box ready</h6><br />

<button className={`btn btn-outline-success btn-sm text-start ${style.button}`} onClick={()=>{navigate('/contact')}} >Contact</button>

            </div>
          </div>

          <h3 className='mt-3'>Description :-
          </h3>
          <div className="row">
          <div className='row col-md-6 py-4 '>
          <h4 className='text-center'>Friday 03/03/2023 - 10/03/2023</h4>
           <table className='bg-white'>
           <thead>
           <tr>
           <th className='pb-1 fs-4'>Product</th>
           <th className='pb-1 fs-4'>Weight</th>
           </tr>
           </thead>
           <tbody>
           {data.map((item)=>(
          
            <tr>
            <td className='fw-semibold text-capitalize'>{item.name}</td>
            <td className='fs-semibold'>{item.weight*100/1000} kg</td>
          
           
            </tr>
            
           ))}
           
           </tbody>
           </table>
          </div>
       
          <div className='row col-md-6 py-4  '>
          <h4 className='text-center'>Friday 25/02/2023 - 03/03/2023</h4>
          <table className='bg-white'>
          <thead>
           <tr>
           <th className='pb-1 fs-4'>Product</th>
           <th className='pb-1 fs-4'>Weight</th>
           </tr>
           </thead>
           <tbody>
           {data.map((item)=>(
          
            <tr>
            <td className='fw-semibold text-capitalize'>{item.name}</td>
            <td className='fs-semibold'>{item.weight*100/1000} kg</td>
          
           
            </tr>
            
           ))}
           
           </tbody>
           </table>
          </div>    
          </div>
      </div>

    </>
  )
}
