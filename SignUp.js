import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import sign from './stylesheets/Sign.css';
import {Link} from 'react-router-dom';



const  SignUp = ({ values, handleChange, nextStep, prevStep }) => {
 
  

  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

/*iNSERTING THE VARIABLES BEFOR VALIDATION CLASSES*/

  };
  return (
    <div className="container my-1">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="d-flex justify-content-start align-items-center my-2 my-md-3">

        <div md="6">
          <div className="d-flex justify-content-start align-items-center mb-4 my-md-5">
           <Link to={'/'}> <AiOutlineArrowLeft size={30} /></Link>
          </div>


              {/*header text */}

          <h3 className="mb-4">Sign Up</h3>
          <p>Create an account with us </p>


          </div>
          
          </div>

          {/*form inputs */}
          
          <form action="#" className="was-validated" noValidate validated={validated} onSubmit={handleSubmit} >
            <div className="form-group my-3 my-md-3" controlId="validationCustom01">
              <label htmlFor="email" className="form-label">Email Address</label>
          
              <input
                type="email"
                name="email"
                id="email"
                className=" formInput"
                placeholder="Enter your email address"
                onChange={handleChange('Email')}
                defaultValue={values.email}
                
                required/>
            </div>


            <div className="form-group my-3 my-md-3" controlId="validationCustom02">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className=" formInput"
                placeholder="Enter your password"
                onChange={handleChange('password')}
                defaultValue={values.password}    
                required/>
               
              </div>

            <div className="form-group my-3 my-md-3" controlId="validationCustom03">
              <label htmlFor="password" className="form-label">Confirm Password</label>
              <input
                type="password"
                name="Confirm password"
                id="Confirm password"
                className=" formInput"
                placeholder="Confirm your password"
                onChange={handleChange('Confirm password')}
                defaultValue={values.ConfirmPassword}  
                required/>
                </div>
            

            <Link to={'/OtpVerification'} className="my-4 mt-md-2 text-white">
            <button
              className="btn-block my-4 mt-md-2 text-white mybtn"  
            >
              <strong>Sign Up</strong>
            </button> 
            </Link>

          </form>
          
          <p className="d-flex justify-content-center align-items-center my-3 my-md-3">
            Already have an account? <Link to="/signIn" className='mx-2 fw-bold' > 
             Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default  SignUp;
