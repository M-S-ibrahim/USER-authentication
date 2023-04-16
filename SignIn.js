import React, { useState } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import sign from './stylesheets/Sign.css';
import { Link } from 'react-router-dom';

const SignIn = ({ values, handleChange,}) => {


      const [email, setEmail] = useState('');
  
      const [validated, setValidated] = useState(false);

      const handleSubmit = (event) => {
        const form = event.currentTarget;
          if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          }

    setValidated(true);

  }
  
  return (
    <div className="container">
      <Row className="justify-content-center mt-5">
        <Col md="6">

              {/*BACKWARD ARROW */}

          <div className="d-flex justify-content-start align-items-center my-4 my-md-5">
          
          <Link to='/SignUp'> <AiOutlineArrowLeft size={30} /> </Link>
          
          </div >
          
          {/*HEADER PART*/}
          <Col>
          <h3 className="mb-3">Sign In</h3>
          <p>Sign in your existing account with us </p>
          </Col>

        <form action="#" className="was-validated mt-5" noValidate validated={validated} onSubmit={handleSubmit} >
          
                    {/*FORM INPUTS PART*/}
          <FormGroup>

            <div className="form-group my-3 my-md-3" controlId="validationCustom01">


              <label htmlFor="email" className="form-label">Email Address</label>

            
                <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Your Email Address"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="formInput"
                defaultValue={values.email}
                required/>
            </div>
            </FormGroup>


            <div className="d-flex justify-content-end my-2 p ">

                    <Link to="/ForgotPassWord1" className='text-danger text-decoration-none'>Forgot Password?</Link>
            </div>



                          {/*BUTTON*/}

            <Link to={'/'}>
                <Button 
                         className="w-100 my-4">
                           <strong> Continue </strong>
                 </Button>
            </Link>



          </form>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md="6">
          <div className="text-center ">
            Don't have an account <Link to={'/SignUp'} className='fw-bold text-primary text-decoration-none'>SignUp</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
