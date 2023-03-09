import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import style from "./Contact.module.css"

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_syoo3af', 'template_9ff1h9r', form.current, 'YQAJhQRKF9ppTsWoU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }; 
      
      return (
        <div>
            <div className="container my-5">
                <div className="row">
                <div className="col-md-6">
                <img src="images/contact.png" className='w-100' alt="" />
                </div>
                    <div className="col-md-6">
                    <div className={`${style.formContainer} p-4 mt-5 d-flex justify-content-center respon   `}>
                        <form ref={form} onSubmit={sendEmail} className={`${style.form}  container border rounded p-3 shadow `} >
                            <div className='form-group'>
                                <label className={`${style.label} fs-4 text-muted col-form-label`} htmlFor="fullName">
                                    Full Name <span className="text-success">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="user_name"
                                    className={`${style.inputBox} form-control my-1`}
                                    id="fullName"
                                    required
                                />
                                
                            </div>
                            <div className='form-group'>
                                <label className={`${style.label} fs-4 text-muted col-form-label`} htmlFor="email">
                                    E-mail <span className="text-success">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="user_email"
                                    className={`${style.inputBox} form-control my-1`}
                                    id="fullName"
                                    required
                                />
                            
                            </div>
                            <div className='form-group '>
                                <label className="fs-4 text-muted col-form-label" htmlFor="text">
                                    Subject <span className="text-success">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    className={`${style.inputBox} form-control  my-1`}
                                    id="text"
                                    required
                                />
                                
                            </div>
                            <div className='form-group '>
                                <div className="text-right my-3">
                                    <label className="fs-4 text-muted" htmlFor="floatingTextarea2">
                                        Message <span className="text-success">*</span>
                                    </label>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" name='message' required id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                                       
                                        <label htmlFor="floatingTextarea2">message</label>
                                    </div>
                                </div>

                                <button type="submit" className={`${style.btn} btn mt-2`}>
                                    Send
                                </button>
                            </div>
                        </form>
                </div>
                </div>
              
                </div>
            </div>
      </div>
)
}
