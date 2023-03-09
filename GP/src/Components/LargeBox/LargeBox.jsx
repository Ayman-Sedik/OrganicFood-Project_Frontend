import { mdiCartArrowDown } from '@mdi/js';
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLargeBox } from '../../Store/largeBox/largeBox';
import style from './LargeBox.module.css'
export default function LargeBox() {


  const { largeBox, IsLoading } = useSelector((state) => state.largeBoxSlice)


  let data = largeBox
  
let navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLargeBox());
  }, [])


  
  return (
    <>

      <div className='container'>
      
          <div className={`${style.data} row   `}>
            <div className='col-md-4'>
              <img src="images/Boxes/big.png" className='w-75' alt="box" />
            </div>
            <div className='col-md-8 mt-5'>
              <h3 className={`${style.type} 'p-3 text-capitalize `}>Large Box</h3>
              <span className={`${style.price} fw-semibold`}>EGP 1600</span>
              <hr />
              <hr />
<p className='text-muted'>The Personal Box contains 14-18 seasonal items, typically 8-9 vegetables, 8 fruits ,4 leaf, 4 meat, 3 herb. Recommended for 1-2 people. Due to the nature of farming in general and organic farming specifically some minor changes might happen to the boxes contents.</p>    
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
      <td className='fw-semibold'>{item.name}</td>
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
      <td className='fs-semibold text-capitalize'>{item.weight*100/1000} kg</td>
     
     
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
