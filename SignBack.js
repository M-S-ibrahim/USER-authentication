import React, { useState } from 'react';
import ForgotPassWord1 from './ForgotPassWord1'
import {Link } from 'react-router-dom'
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import sign from './stylesheets/Sign.css';


const SignBack = ({ values, handleChange, userName}) => {
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
           <Link> <AiOutlineArrowLeft size={30}  /> </Link>
          </div>


            {/*HEADER */}

          <h3 className="mb-4">Hi {userName}</h3>
          <p>Securely sign in to your alphabet account</p>

                {/*FORM INPUTS */}

          <form action="#" className="was-validated" noValidate validated={validated} onSubmit={handleSubmit} >
            
            <FormGroup>
            
            <div className="form-group my-3 my-md-3" controlId="validationCustom01">
              <label htmlFor="email" className="form-label">Email Address</label>


                <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Your Password"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="form-control formInput"
                defaultValue={values.email}
                required/>
            </div>
            </FormGroup>

              {/*FORGOTPASSWORD*/}

            <div className="d-flex justify-content-end my-2">
              <Link to="#" className="mx-3 text-danger"  >Forgot Password?</Link>
            </div>

            <Link to={'/'}>
            <Button 
              
                  className="w-100 my-4" 
            >              
              <strong>Submit </strong>
            </Button>
            </Link>
          </form>
        </Col>
      </Row>





      <Row className="justify-content-center mb-5">
        
        <Col md="6">
          <div className="text-center ">
            Not my account? <a href="/" className="mx-3 fw-bold text-primary">Switch Account</a>
            
          </div>
        </Col>
      </Row>
      
    </div>
  );
};

export default SignBack;
