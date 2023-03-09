import {  CardCvcElement, CardElement, CardExpiryElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './CheckOutForm.module.css'
export default function CheckOutForm() {

    const stripe = useStripe()
    const element = useElements()


    const { cartItem } = useSelector((state) => state.cartSlice)
  let price = cartItem.reduce((x, y) => x + y.qty * y.price, 0)
  let totalPrice =price>500 ?price:price+20

  console.log(totalPrice)

    const [isProcessing,setProcessing] = useState(false)
    const [error , setError] = useState('')
    const [status , setStatus] = useState('Pay')
    const [credentials, setCredeintials] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        
    })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredeintials({
      ...credentials,[name] : value
    })
  }

const handleCardChange = (e)=>{
    if(e.error) return setError(e.error.message)
    setError('')
}

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)
    setStatus('Processing ...')

    const cardElement = element.getElement('card')
    const {name , phone , email,address} = credentials;
    const billingInfo = {
        name,
        phone,
        email,
        address:{
            line1:address
        }
    }

    try {
        const paymentIntent = await axios.post('http://localhost:8000/payment',{
            amount: 100
        })
        
        const paymentMethodObj = await stripe.createPaymentMethod({
            type:'card',
            card:'cardElement',
            billing_details:billingInfo
        })

        if(paymentMethodObj.error){
            setError(paymentMethodObj.error.message)
            setProcessing(false)
            setStatus('Pay')
            return;
        }
        const confirmedPayment = await stripe.confirmCardPayment(
            paymentIntent.data,{payment_method:paymentMethodObj.paymentMethod.id}
        )
        if(paymentMethodObj.error){
            setError(paymentMethodObj.error.message)
            setProcessing(false)
            setStatus('Pay')
            console.log("erroor",paymentMethodObj.error.message)
            return;
        }

        setStatus('Successful Payment')

        setTimeout(() => {
            setStatus('Pay')
            setProcessing(false)
            setCredeintials({
                name: '',
                email: '',
                phone: '',
                address: '',
            })
            cardElement.clear()
        }, 2000);

    } catch (error) {
        setError(error.message)
        setProcessing(false)
        setStatus('Pay')
    }


  }


  return (
    <div className={`${style.CheckOutForm} container my-5 pt-3  `}>
      <div className='w-75 m-auto'>
          <h3 className={`${style.MainColor} text-center  fw-bold text-capitalize my-3 mb-5`}>
          <i class="fa-regular fa-credit-card text-dark"></i> checkout
          </h3>
          <p className=' fs-4 fw-semibold text-muted '>You are purchasing an <span>{ } name</span> for ${}price</p>
          
          <form onSubmit={handlePayment} >
              <input onChange={handleChange} type="text" placeholder='Full Name' name='name' className='form-control p-2 mb-3' required value={credentials.name} />
              <input onChange={handleChange} type="text" placeholder='Phone Number' name='phone' className='form-control p-2 mb-3' required value={credentials.phone}/>
              <input onChange={handleChange} type="email" placeholder='Email' name='email' className='form-control p-2 mb-3' required value={credentials.email}/>
               <input onChange={handleChange} type="text" placeholder='Address' name='address' className='form-control p-2 mb-3' required value={credentials.address} />
        <p>{error}</p>
         <CardElement options={{ hidePostalCode: true , style: { base: { fontSize: '20px',margin:'0px' } ,invalid:{color:'red'}}}} onChange={handleCardChange}/> 
         <button type='submit' disabled={isProcessing || !totalPrice }  className='btn btn-success mt-3'>Pay</button>
         </form>
         </div>
</div>
)
}
