import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { IoIosBasket } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import style from './register.module.css'
export default function Register() {

  // const [errorDetails, setError] = useState([])
  // const [msg, setMsg] = useState('')
  // const [loading, setLoading] = useState(true)


  // function validateUser() {
  // 	let rules = Joi.object(
  // 		{
  // 			first_name: Joi.string().alphanum().min(3).max(15).required(),
  // 			last_name: Joi.string().alphanum().min(3).max(15).required(),
  // 			email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  // 			password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  // 			age: Joi.number().min(15).max(50).required()
  // 		}
  // 	)
  // 	let validationResult = rules.validate(user, { abortEarly: false })



  // 	if (validationResult.error !== undefined) {
  // 		setError(validationResult.error.details)
  // 		return false
  // 	} else {
  // 		setError([])
  // 		return true
  // 	}
  // }
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "", password: "", age: 30 })
  const [apiMsg, setApiMsg] = useState('')
  const [errors, setErrors] = useState([])
  const [loading , setLoading] = useState(false)

  let myUser = { ...user }
  let getForm = ({ target }) => {

    myUser[target.name] = target.value
    setUser(myUser)

  }
  let navigate = useNavigate()

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  let validateUser = () => {

    let rules = Joi.object(
      {
        first_name: Joi.string().alphanum().min(3).max(15).required(),
        last_name: Joi.string().alphanum().min(3).max(15).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        age: Joi.number().min(15).max(50).required()
      }
    )
    let validationResult = rules.validate(user, { abortEarly: false })

    if (validationResult.error !== undefined) {
      setErrors(validationResult.error.details)
      return false
    } else {
      setErrors([])
    return true 
    }
    
  
  }

  let register = async (e) => {
    e.preventDefault()
    if (validateUser()) {

      setLoading(true)
      let { data } = await axios.post('https://route-movies-api.vercel.app/signup', user)
      if (data.errors !== undefined) {
        setLoading(false)
        setApiMsg(data.errors.email.message)
      } else {
        setLoading(false)
        setApiMsg(data.message)
        navigate('/login')
      }

    } else {
      
    }



  }

  let showError = (errName) => {
    let error = errors.filter((err) => {
      return err.message.includes(errName)
    })


    if (error[0] !== undefined) {   

      let msg = error[0].message 
      if (msg.includes('pattern')) {
        msg = 'please enter right words'
      }
        return <p className='text-danger fw-semibold'>{msg}</p>
    } else {
      return ''
    }
  }



  return (
    <>
<div className="container">
<div className="row">
<div className='col-md-6'>
<img src="images/signup.png" className='w-100' alt="signup" />
</div>
  <div className="col-md-6 mx-auto mb-5 pt-5">

          <h2 className={` ${style.h1Color} text-muted mb-4 text-center ` }> SignUp Form  </h2>  
        <form onSubmit={register} className={`border py-3 px-4`} >
        
                   
        
          <label htmlFor="first_name" className='fs-5  text-muted'>First Name <span className={`${style.defaultColor} fw-bold `}>*</span></label>
          <input type="text" onChange={getForm} className={!showError('first_name') ?`${style.brdrGreen} form-control my-3`:` ${style.brdrRed}  form-control my-3`} id="first_name" name="first_name" />
          {errors.length != 0 ? showError("first_name") : ''}
          
          <label htmlFor="last_name" className='fs-5  text-muted'>Last Name <span className={`${style.defaultColor} fw-bold `}>*</span> </label>
          <input type="text" onChange={getForm} className={!showError('last_name')?`${style.brdrGreen} form-control my-3`:` ${style.brdrRed}  form-control my-3`} id="last_name" name="last_name" />
          {errors.length != 0 ? showError("last_name") : ''}

          <label htmlFor="email" className='fs-5  text-muted'>E-Mail <span className={`${style.defaultColor} fw-bold `}>*</span> </label>
          <input type="email" onChange={getForm} className={!showError('email')?`${style.brdrGreen} form-control my-3`:` ${style.brdrRed}  form-control my-3`} id="email" name="email" />
          {errors.length != 0 ? showError("email") : ''}
          
          <label htmlFor="password" className='fs-5  text-muted'>Password <span className={`${style.defaultColor} fw-bold `}>*</span> </label>
          <input type="password" onChange={getForm} className={!showError('password')?`${style.brdrGreen} form-control my-3`:` ${style.brdrRed}  form-control my-3`} id="password" name="password" />
          {errors.length != 0 ? showError("password") : ''}
      <div className='text-end'>
          <button className={`${style.button} btn btn-md`}>{!loading ? 'Register': <i className="fas fa-spinner fa-spin"></i>}</button>
          </div>
          { apiMsg  ? <p className={apiMsg != 'success' ?`alert alert-danger fw-semibold my-2 w-50 fs-4 text-center mx-auto `:`alert alert-success fw-semibold my-2 w-50 fs-4 text-center mx-auto`}>{ apiMsg}</p>:''}
        </form>

      </div>
</div>

</div>
    




    </>
  )
}
