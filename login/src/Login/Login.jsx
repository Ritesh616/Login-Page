import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  Username: "",
  Password: "", 
};

const Login = () => {

  // Display Notification Using Raect-Toastify
  const diffToast =()=>{
    toast.success("Login SuccessFully", {
      theme:"colored",
      position:"top-center"
    });
  }

  const navigate = useNavigate();
  const [setState] = useState(initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  
  // For Setting Name
  const onUsernameChange = (e) => {
    setUsername(e.target.value);  
    };
    const onPasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();

  //  Show the Details in Impact-Console
    console.log(username);
    console.log(password);
   
    
    if (
      !username ||
      !password 
    
    ) { 
      console.log("inif")
      toast.error("Please Provide value into each input field");
    } else {
      console.log("Data Stored Successfully")
      axios
        .post("http://localhost:3000/crud", {
          username,        
          password,        
        })
        .then(() => {         
          setState({
            username: "",
            password: "",           
          });
         
        })

        
        .catch((err) => toast.error(err.response));
        navigate('/dashboard')
    }
  };
  

  return (
   
    <div className='addUser'>
        <h3>Login</h3>
        <form onSubmit={handleSubmit} className="addUserForm">
            <div className='inputGroup'>
                <label htmlFor='name'>UserName:</label>
                <input type='text'
                 id="username" 
                 autoComplete='off' 
                 name="username"
                 onChange={(e) => onUsernameChange(e)}
               
                 placeholder='Enter Username'
                 required
                />

                <label htmlFor='password'>Password:</label>
                <input type='password'
                 id="password" 
                 autoComplete='off'
                 name="password"
                 onChange={(e) => onPasswordChange(e)} 
                 placeholder='Enter password'
                />

               <div className='Login'>
              <p>Already have an Account ?</p>  
              </div>      

                <button type="submit" class="btn btn-success"
                 onClick={diffToast} >
                    Login
                </button>



                <div className='Login1'>
              <p>Don't have  Account ?</p>  
              </div>      
                      
                <Link to={'/sign'} type='submit' class="button" >                                            
                Sign-Up                
                </Link>                                      
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login