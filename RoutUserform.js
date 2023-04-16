import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPassWord1 from './ForgotPassWord1';
import ForgotPassWord2 from './ForgotPassWord2';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignBack from './SignBack';
import OtpVerification from './OtpVerification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export class RoutUserForm extends Component {
  state = {
    comfirmPassword: '',
    password: '',
    email: '',
    ForgotPassWord: '',
  };


  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { comfirmPassword, password, email, ForgotPassWord, } = this.state;
    const values = { comfirmPassword, password, email, ForgotPassWord,};

    return (
      <Router>
        <Routes>
          <Route exact path="SignUp"element={
            <SignUp
             
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          } />
            
          <Route path="/OtpVerification"element={
            <OtpVerification
             
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          } />
               <Route path="/SignBack" element={
             <SignBack
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
  
              />
        } />
          <Route path="/signIn" element={
            <SignIn
             
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
        
            />
          } />

        
          <Route path="/ForgotPassWord1"element={
            <ForgotPassWord1
             
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
          
            />
          } />
         
          <Route path="/forgotPassword2"element={
            <ForgotPassWord2
             
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          } />


    </Routes>
    </Router>     
  
    )
  }
}

export default RoutUserForm;
