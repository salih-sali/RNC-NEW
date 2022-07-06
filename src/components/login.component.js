import { useState } from "react"
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './singup.css'
//import Form1 from './../forms/Form1'


function Login() {
 const [emailaddress,setEmailaddress] = useState('')
 const [pass,setPass] = useState('')
const handleSub=(e)=>{
  e.preventDefault()
    console.log("USER : "+emailaddress)
    console.log("pass : "+pass)
    
}

//111111111111111111111
const [data, setData] = useState({ email: "", password: "" })
	const [error, setError] = useState("")

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/home";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	}


    return (
      <div className="ww">
      <form onSubmit={handleSubmit} >
       
      <div className="signupParentDiv">
      
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            onChange={handleChange}
							value={data.email}
							required
            //value={emailaddress}
            //onChange={(e)=>setEmailaddress(e.target.value)}
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
           // value={pass}
            //onChange={(e)=>setPass(e.target.value)}
            className="form-control"
            onChange={handleChange}
							value={data.password}
							required
              name="password"
            placeholder="Enter password"
          />
        </div>
        {error && <div className="error_msg">{error}</div>}
        <div className="d-grid">
          <button  type="submit" className="btn btn-primary">
            Submit
          </button>
          
         <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        </div>
        </div>
       
      </form>
       </div>
    )
  }

export default Login