//import {down} from './Down'
//import Dropdown from 'react-bootstrap/Dropdown';
//import React, { Component } from 'react'

import {useState} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './singup.css'
import './Navbar/Navbar.css'
import imh1 from '../images/logomits.png'



 
function SignUp() {
  const [emailaddress,setEmailaddress] = useState('')
  const [pass,setPass] = useState('')
  const [name,setName] = useState('')
 const [dept,setDept] = useState('')

 //111111111111111111
 const [data, setData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const [error, setError] = useState("")
	const navigate = useNavigate()

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const url = "http://localhost:8080/api/users"
			const { data: res } = await axios.post(url, data)
			navigate("/sign-in")
			console.log(res.message)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message)
			}
		}
	}

 const handleSub=(e)=>{
  
  e.preventDefault()
    console.log("USER : "+data.email)
    //console.log("pass : "+pass)
    console.log("Name : "+data.firstName)
    //console.log("dept : "+dept)
}
const handleSelect=(e)=>{
  setDept(e)
  
}

    return (

      <div>
      {/* <div className='navbar'> 
      <a href="https://mgmits.ac.in/">
         <img className="logo" src={imh1}></img></a>
         <img className="nba" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nba.png"></img>
         <img className="nirf" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nirf-logo.png"></img>
         <img className="ariia" src="https:/mgmits.ac.in/wp-content/themes/muthoot/images/ariia_logo.jpg"></img>
        
         <a href="/" >
         <h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
         </div> */}

      <div className="ww">
      <form onSubmit={handleSubmit}>
        <div className="signupParentDiv">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label> Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            //value={name}
            
            onChange={handleChange}
            name="firstName"
          // onChange={(e)=>setData.firstName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label> Department</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter Dept name"
            //value={name}
            onChange={handleChange}
            name="lastName"
           // onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
							required
              name='email'
            //2.value={emailaddress}
            //onChange={(e)=>setEmailaddress(e.target.value)}
          />
        </div>
        <div className="mb-3"  >
 
  
</div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
          
							required
            placeholder="Enter password"
            onChange={handleChange}
            name='password'
           // value={pass}
            //onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        
        <div className="d-grid">
{error && <div className="error_msg">{error}</div>}

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        </div>
      </form>
      </div>
      </div>
    )
  
}

export default SignUp