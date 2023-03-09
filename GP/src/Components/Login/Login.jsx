import axios from "axios";
import Joi from "joi";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fireLogin } from "../../Store/login/loginSlice";
import style from "./Login.module.css"

export default function Login() {


  const [user, setUser] = useState({email: "", password: ""})
  const [apiMsg, setApiMsg] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  let [userName, setUserName] = useState('')
  

  let dispatch =useDispatch()

  let myUser = { ...user }
  let getForm = ({ target }) => {

    myUser[target.name] = target.value
    setUser(myUser)

  }
  let navigate = useNavigate()


  let validateUser = () => {

    let rules = Joi.object(
      {
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
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



  let login = async (e) => {

    
    e.preventDefault()
   
    if (validateUser()) {

      setLoading(true)
      let { data } = await axios.post('https://route-movies-api.vercel.app/signin', user)
     
      if (data.errors !== undefined) {


        setLoading(false)
        setApiMsg(data.errors.email.message)
      } else {

        localStorage.setItem('token', data.token)
      
        setLoading(false)
        setApiMsg(data.message)
        dispatch(fireLogin(true))

        let userData = jwtDecode(localStorage.getItem('token'))
        if (userData.first_name === "Admin") {
             navigate('/admin/tableP1')
        } else {
          navigate('/home')
          
           }
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
    <div className="col-md-6">
    <img src="images/login.png" className="w-100" alt="login" />
    </div>

  <div className="col-md-6">
      <div className="w-100 mx-auto mt-5 pt-5">

        <h2 className={` ${style.h1Color} text-muted mb-4 text-center `}> Login Form  </h2>
        <form onSubmit={login} className={`border py-3 px-4`} >



          <label htmlFor="email" className='fs-5 fw-semibold text-muted'>E-Mail <span className={`${style.defaultColor} fw-bold `}>*</span> </label>
          <input type="email" onChange={getForm} className={!showError('email') ? `${style.brdrGreen} form-control my-3` : ` ${style.brdrRed}  form-control my-3`} id="email" name="email" />
          {errors.length != 0 ? showError("email") : ''}

          <label htmlFor="password" className='fs-5 fw-semibold text-muted'>Password <span className={`${style.defaultColor} fw-bold `}>*</span> </label>
          <input type="password" onChange={getForm} className={!showError('password') ? `${style.brdrGreen} form-control my-3` : ` ${style.brdrRed}  form-control my-3`} id="password" name="password" />
          {errors.length != 0 ? showError("password") : ''}
          <div className='text-end'>
            <button className={`${style.button} btn fw-semibold btn-md`}>{!loading ? 'Login ' : <i className="fas fa-spinner fa-spin"></i>}</button>
            
          </div>
          {apiMsg ? <p className={apiMsg != 'success' ? `alert alert-danger fw-semibold my-2 w-50 fs-4 text-center mx-auto ` : `alert alert-success fw-semibold my-2 w-50 fs-4 text-center mx-auto`}>{apiMsg != 'success' ? apiMsg:'Success Login'}</p> : ''}
          {/* {apiMsg != 'success' ? <p className='alert alert-danger fw-semibold my-2 w-50 fs-4 text-center mx-auto'>{ apiMsg} <i class="fa-solid fa-circle-exclamation"></i></p>:<p className='alert alert-success fw-semibold my-2'>{ apiMsg} <i class="fa-solid fa-circle-check"></i></p>} */}
        </form>

      </div>
      </div>
  </div>
  </div>
    </>

  );
}
