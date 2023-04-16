import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Sign from './stylesheets/Sign.css'

import {
  Row,
  Col,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const OtpVerification =  ({ values, handleChange, }) => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(60);

  {/*INPUT CHANGE FUNCTION */}
  const handleDigitChange = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
  }


  {/* RESENT FUNCTION DECLERATION */}
  const handleResend = () => {
    // Send the OTP again
    setCountdown(60);
  }

  {/*TIME COUNTER */}
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
          
          {/* BACKWORD PARROW PART */} 

          <Row className="justify-content-center">
        <Col xs="12" className="mb-3">
          <div className="d-flex justify-content-start align-items-center my-4 my-md-5">
           <Link to='/SignUp'> <AiOutlineArrowLeft size={30}  /></Link>
          </div>
        </Col>

        {/* PROGRESS BAR PART */}

        <Col xs="12" className="mb-3">
          <div className="col-12 mb-3 bg-dark">
            <hr style={{ height: '3px', 
            backgroundColor: 'black', 
            color: 'black' }} />
          </div>
        </Col>

    {/* HEADER PART */}    
  <Col xs="12" className="mb-3 d-flex justify-content-center">
    <h5>Verify Your Account</h5>
    
  </Col>
  <Col xs="12" className="mb-3 mx-4 d-flex justify-content-center">
  <p>Please enter the Four digit code sent to your mail </p>
    
  </Col>


  {/*OTP INPUT PART */}


  <Col xs="2" className="mb-3 text-center">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[0]}
        className=" text-center digitINput"
        onChange={e => handleDigitChange(0, e.target.value)}
      />
    </FormGroup>
  </Col>
  <Col xs="2" className="mb-3">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[1]}
        className="text-center digitINput"
        onChange={e => handleDigitChange(1, e.target.value)}
      />
    </FormGroup>
  </Col>
  <Col xs="2" className="mb-3">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[2]}
        className="text-center digitINput"
        onChange={e => handleDigitChange(2, e.target.value)}
      />
    </FormGroup>
  </Col>
  <Col xs="2" className="mb-3">
    <FormGroup>
      <Input type="text"
        maxLength="1"
        value={digits[3]}
        className="text-center digitINput"
        onChange={e => handleDigitChange(3, e.target.value)}
      />
    </FormGroup>

    {/* RESEND OTP FUNCTION PART */}
  </Col>
  <Col xs="12" className="mb-3 mb-3 d-flex justify-content-center">
    {countdown > 0 ?
      <p>Didn't get the Code?  <span className="text-danger m-2"> Resend in {countdown} seconds</span></p> :
      <p>Didn't receive the OTP? 
        <Link to="#" className="text-danger m-2" onClick={handleResend}>Resend OTP</Link></p>
     
    }
  </Col>


  {/* VERIFY BUTTON*/}
        <Link to={'/'} xs="12" className="mb-3 d-flex justify-content-center">
            <Button 
              className="w-100 my-4" 
              
            >
             <strong> Verify </strong>
            </Button>


  </Link>
</Row>

      
        </div>
      </div>
    </div>
  </div>
  );
};

export default OtpVerification;
