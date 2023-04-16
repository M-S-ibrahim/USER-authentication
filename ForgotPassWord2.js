import React, { useState, useEffect } from 'react';
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


const ForgotPassWord2 =  ({ values, handleChange}) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(60);


  const handleDigitChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
  }

  const handleResend = () => {
    // Send the OTP again
    setCountdown(60);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="justify-content-start align-items-center my-2 my-md-3">
          <div className="container my-3 justify-content-start align-items-center">
          
          <Row className="justify-content-center">
        <Col xs="12" className="mb-3">
          
          <div className="d-flex justify-content-start align-items-center my-4 my-md-5">
           <Link to={'/ForgotPassWord1'}> <AiOutlineArrowLeft size={30} /> </Link>
          </div>
        
        </Col>


        <Col xs="12" className="mb-3">

          <div className="col-12 mb-3 pBar" >
             <div className='PbarDiv bg-black w-100 ' ></div>
           </div>
    
        </Col>
      


        <Col xs="12" className="mb-2 d-flex justify-content-center">
            <h5>Forgot Password </h5>  
        </Col>


  <Col xs="12" className="mb-1 d-flex justify-content-center">
        <p>Please enter the Four digit code sent to you </p>
  </Col>
  


  <Col xs="2" className="mb-2">

    <FormGroup>
    
      <Input type="text"
        maxLength="1"
        value={digits[0]}
        className="digitINput"
        onChange={e => handleDigitChange(0, e.target.value)}
      />
    </FormGroup>
  </Col>
  
  <Col xs="2" className="mb-2">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[1]}
                        className="digitINput"
        onChange={e => handleDigitChange(1, e.target.value)}
      />
    </FormGroup>
  </Col>
  
  <Col xs="2" className="mb-2">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[2]}
                        className="digitINput"
        onChange={e => handleDigitChange(2, e.target.value)}
      />
    </FormGroup>
  </Col>
  
  <Col xs="2" className="mb-2">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[3]}
                        className="digitINput"
        onChange={e => handleDigitChange(3, e.target.value)}
      />
    </FormGroup>
  </Col>
  
  <Col xs="12" className="mb-1 mb-1 d-flex justify-content-center">
    {countdown > 0 ?
      <p> Didn't ger the Code?  <span className='text-danger text-decoration-none ml-1' > Resend in {countdown} seconds</span></p> :
      <p>Didn't receive the OTP?<a href="#" className='text-danger text-decoration-none m-2'  onClick={handleResend}>Resend OTP</a></p>
    }
  </Col>
  <Col >
    <Link to={'/'}>
     <Button 
              className="w-100 my-4 text-decoration-none border border-0 w-100" 
            >
             <strong> Continue </strong>
            </Button>
   </Link>
  </Col>
</Row>

      
       </div>
     </div>
    </div>
   </div>
  );
};

export default ForgotPassWord2;
