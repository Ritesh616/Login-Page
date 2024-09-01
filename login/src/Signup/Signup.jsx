import React from 'react'
import './Signup.css';


const Signup = () => {
  return (
    <div>
         <div className='addUser'>
         <h3>Sign Up</h3>
        <form className="addUserForm">
            <div className='inputGroup'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id="name" placeholder='Enter Name'
                />

                <label htmlFor='Email'>Email:</label>
                <input type='email'
                 id="email" 
                 autoComplete='off' 
                 placeholder='Enter Email'
                />

                <label htmlFor='Phone no'>Phone no:</label>
                <input type='Phone no'
                 id="Phone no" 
                 autoComplete='off' 
                 placeholder='Enter Phone no'
                />

                <label htmlFor='password'>Password:</label>
                <input type='password'
                 id="password" 
                 autoComplete='off' 
                 placeholder='Enter password'
                />

                <label htmlFor='Conform password'>Conform Password:</label>
                <input type='Conform password'
                 id="Conform password" 
                 autoComplete='off' 
                 placeholder='Enter Conform password'
                />

                <label htmlFor='Address'>Address:</label>
                <input type='Address'
                 id="Address" 
                 autoComplete='off' 
                 placeholder='Enter Address'
                />

                
            </div>
        </form>
        <div className='Sign Up'>
     
          <button type='submit' class ='btn btn-primary'>
          Submit
          </button>
         </div>
    
      </div>   
    </div>
  )
}

export default Signup
