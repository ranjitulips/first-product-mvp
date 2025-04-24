import React, {useEffect, useState} from 'react'
import './SignInForm.css'


const SignInForm = ()=>{

    
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [emailError, setEmailError] = useState('');
      const [passwordError, setPasswordError] =useState('')


    useEffect(()=>{
        validation();
      },  [email, password])
    
    const handleInput = (event)=>{
      const {name, value} = event.target;
      
      if(name=== 'email'){
        setEmail(value);
      }else if(name==='password'){
        setPassword(value);
      }
    }
    
    const handleSubmit = (event)=>{
      event.preventDefault();
      
      validation();
    
    }
    
    const validation = ()=> {
      if(email === ""){
        setEmailError("Email is required")
      }else if(email.length > 30 ){
        setEmailError("Max length is 30")
      }else{
        setEmailError("")
      }
    
    
      if(password === ""){
        setPasswordError("Password is required")
      }else if(password.length < 8 ){
        setPasswordError("Min length is 8")
      }
      else if(password.length > 16 ){
        setPasswordError("Max length is 16")
      }else{
        setPasswordError("")
      }
    
    }
    

    return (
        <section className='form-container'>
        <form onSubmit={handleSubmit}>
          
          <input className='input' value={email} onChange={handleInput} name="email" type="text" placeholder='Email'/>
          <span className='error'> {emailError}</span>
          
          <input className='input' value={password}  onChange={handleInput}  name="password" type="password" placeholder='Password'/>
          <span className='error'> {passwordError}</span>
          <button className='input' type='submit'> Submit</button>
        </form>
        </section>
   )
}

export default SignInForm;