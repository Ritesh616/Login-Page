import React from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';

const login = () => {
  return (
   
    <div className='addUser'>
        <h3>Login</h3>
        <form className="addUserForm">
            <div className='inputGroup'>
                <label htmlFor='name'>UserName:</label>
                <input type='text'
                 id="username" 
                 autoComplete='off' 
                 placeholder='Enter Username'
                />

                <label htmlFor='password'>Password:</label>
                <input type='password'
                 id="password" 
                 autoComplete='off' 
                 placeholder='Enter password'
                />

               
                <button type="submit" class="btn btn-success">
                    Login
                </button>
                
            </div>
        </form>
        <div className='Sign Up'>
          <p>Don't have Account ?</p>
     
          <Link to={'/signup'} type='submit' class ='btn btn-primary'>
          Sign-Up
          </Link>
        </div>
    
    </div>

  )
}

export default login
