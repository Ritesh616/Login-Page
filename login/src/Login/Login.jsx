import React from 'react'
import "./Login.css";

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
    
    </div>

  )
}

export default login
