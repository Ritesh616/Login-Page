import React, { useState } from "react";
import axios from "axios";
import "./Sign.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  Name: "",
  Email: "",
  Phone_No: "",
  Password: "",
  Confirm_Password: "",
  Address: "",
};
const Sign = () => {

  // Display Notification Using Raect-Toastify
  const diffToast =()=>{
    toast.success("SignUp SuccessFully", {
      theme:"colored",
      position:"top-center"
    });
  }
  
  const [ setState] = useState(initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [address, setAddress] = useState("");

  // For Setting Name
  const onNameChange = (e) => {
    setName(e.target.value);  
    };
    const onEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const onPhone_noChange = (e) => {
      setPhone_no(e.target.value);
    };
    const onPasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const onConfirm_PasswordChange = (e) => {
      setConfirm_password(e.target.value);
    };
    const onAddressChange = (e) => {
      setAddress(e.target.value);
    };

    const handleSubmit = (e) => {
    e.preventDefault();

  //  Show the Details in Impact-Console
    console.log(name);
    console.log(email);
    console.log(phone_no);
    console.log(password);
    console.log(confirm_password);
    console.log(address);
    
    if (
      !name ||
      !email ||
      !phone_no ||
      !password ||
      !confirm_password ||
      !address 
    ) { 
      console.log("inif")
      toast.error("Please Provide value into each input field");
    } else {
      console.log("Data Stored Successfully")
      axios
        .post("http://localhost:3000/user", {
          name,
          email,
          phone_no,
          password,
          confirm_password,
          address,
        })
        .then((
        
        ) => {
          setState({
            name: "",
            email: "",
            phone_no: "",
            password: "",
            confirm_password: "",
            address: "",
          });
        })
        .catch((err) => toast.error(err.response));
    }
  };
  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="signupFrom">
        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="name">
            Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => onNameChange(e)}
              required
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="email">
            Email
          </label>
          <div className="col-sm-5">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(e) => onEmailChange(e)}
              required
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="phone no">
            Phone No
          </label>
          <div className="col-sm-5">
            <input
              type="phone_no"
              className="form-control"
              name="phone_no"
              onChange={(e) => onPhone_noChange(e)}
              required
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="password">
            Password
          </label>
          <div className="col-sm-5">
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(e) => onPasswordChange(e)}
              required
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="confirm password">
            Confirm Password
          </label>
          <div className="col-sm-5">
            <input
              type="confirm_password"
              className="form-control"
              name="confirm_password"
              onChange={(e) => onConfirm_PasswordChange(e)}
              required
            />
          </div>
        </div>

        <div className="row mb-4">
          <label className="col-sm-2 col-form-label" htmlFor="address">
            Address
          </label>
          <div className="col-sm-5">
            <input
              type="address"
              className="form-control"
              name="address"
              onChange={(e) => onAddressChange(e)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success"
        onClick={diffToast}>
          {" "}
          Sign-Up{" "}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Sign;
