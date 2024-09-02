import React from 'react'
import './Sign.css'

const Sign = () => {
  return (
    <div>
                <form className="signupFrom">
                   <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="name"  />                  
                    </div>
                    </div>

                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="email"   />
                    </div>
                    </div>

                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Phone No</label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="email"   />
                    </div>
                    </div>

                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="email"   />
                    </div>
                    </div>

                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Confirm Password</label>
                    <div className="col-sm-5">
                    <input type="text" className="form-control" name="email"   />
                    </div>
                    </div>

                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-5">
                    <input type='text'  className="form-control" name="address"    />                   
                    </div>
                    </div>
            
    
                </form>

                <button type="submit" class="btn btn-success">
                    Sign-Up
                </button>

            </div>

            
  );
}

export default Sign