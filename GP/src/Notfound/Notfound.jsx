import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Notfound.module.css'
export default function Notfound() {
  let navigate = useNavigate()
  return (
    <>
<div className="container">
<div className="row align-items-center">
<div className="col-md-6">
<img src="images/errorWord.png" alt="error" />
<h5 className='mt-4 text-center fw-semibold'>We’re sorry — something has gone wrong on our end.</h5>
<p className='text-center text-muted '>If difficulties persist, please contact the System Administrator of this site and report the error below.</p>
<div className="text-center">
<button onClick={()=>{navigate('home')}} className={`${style.button} btn text-white `}><i class="fa-solid fa-house-chimney"></i> Back to home</button>
</div>
</div>
<div className="col-md-6 align-items-start">
<img src="images/errorImg.jpg" alt="error" />

</div>
</div>

</div>
    </>
)
}
