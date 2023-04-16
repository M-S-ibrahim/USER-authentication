import React, { useState } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import fPassword from './stylesheets/Fpassword.css';
import { Link } from 'react-router-dom';

const ForgotPassWord1 = ({ values, handleChange,  }) => {
  const [email, setEmail] = useState('');
  


  
  
  return (
    <div className="container">
      
      <Row className="justify-content-center mt-5">
        
        <Col md="6">
          
          <div className="d-flex justify-content-start align-items-center my-4 my-md-5">
           <Link to='/SignIn'> <AiOutlineArrowLeft size={30}  /></Link>
          </div>
          
        <Col xs="12" className="mb-3">


      <div className="col-12 mb-3 pBar" >
            <div className='PbarDiv bg-black w-50' ></div>
      </div>
    
          </Col>
    
          <div >
         
          <h3 className='d-flex justify-content-center align-items-center my-2 my-md-3'>Forgot Password</h3>
          <p className='d-flex justify-content-center mb-5 my-md-4'>Enter your Email Address linked to your account</p>
         
          </div>
          <form>

            <FormGroup>

            <label htmlFor="Email">Email Address</label>
             
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Your Email Address"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
               className="formInput w-100 p-2 rounded-3"
              />
            </FormGroup>

            <div className="d-flex justify-content-end my-2">
              <Link to="/SignIn" className='text-danger text-decoration-none'>Use Phone Number Instead?</Link>
            </div>

            <Link to={'/forgotPassword2'}>
            <Button 

              color="primary" 
              className="w-100 my-4 text-decoration-none border border-0 w-100" >
                
                 <strong>Continue </strong>
             </Button>

            </Link>


          </form>
        </Col>
      </Row>
      
    </div>
  );
};

export default ForgotPassWord1;
