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

               <div className='Login'>
              <p>Already have an Account ?</p>  
              </div>      

                <button type="submit" class="btn btn-success">
                    Login
                </button>


                <div className='Login1'>
              <p>Don't have  Account ?</p>  
              </div>      
        
               

                <Link to={'/sign'} type='submit' class="button">Sign-Up</Link>
                        
                
            </div>

        </form>

    </div>
  )
}

export default login