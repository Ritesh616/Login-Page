import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Sign.css";

const initialState = {
  Name: "",
  Email: "",
  PhoneNo: "",
  Password: "",
  ConfirmPassword: "",
  Address: "",
};
const Sign = () => {
  const [state, setState] = useState(initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phoneNo ||
      !password ||
      !confirmPassword ||
      !address
    ) {
      toast.error("Please Provide value into each input field");
    } else {
      axios
        .post("http://localhost:3000/user", {
          name,
          email,
          phoneNo,
          password,
          confirmPassword,
          address,
        })
        .then(() => {
          setState({
            name: "",
            email: "",
            phoneNo: "",
            password: "",
            confirmPassword: "",
            address: "",
          });
        })
        .catch((err) => toast.error(err.response.data));
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
              name="phone no"
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
              name="confirm password"
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
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          {" "}
          Sign-Up{" "}
        </button>
      </form>
    </div>
  );
};

export default Sign;
