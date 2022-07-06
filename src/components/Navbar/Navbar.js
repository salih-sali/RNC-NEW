import React from 'react'
import "./Navbar.css";
import imh1 from '../../images/logomits.png'
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'
import App from '../../App'
import Form1 from '../../forms/Form1';
import SignUp from '../signup.component';
import Login from '../login.component'
import Page from '../page/Home'
import AddD from './addD/AddD';
import Banner from './../Banner/Banner'
import Des from '../Description/Description'
import Foot from '../Footer/Footer'

//import Home from '../page/Home'


function NavBar() {

  const user = localStorage.getItem("token");

  return (
  
    <Router>
       <Switch>
    <div className='navbar'> 
    <a href="https://mgmits.ac.in/">
       <img className="logo" src={imh1}></img></a>
       <img className="nba" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nba.png"></img>
       <img className="nirf" src="https://mgmits.ac.in/wp-content/themes/muthoot/images/nirf-logo.png"></img>
       <img className="ariia" src="https:/mgmits.ac.in/wp-content/themes/muthoot/images/ariia_logo.jpg"></img>
       <a href= "/qqq/sign-in" className='login'>LOGIN</a>
       <a href="/qqq/sign-up" className='signup'>SIGNUP/</a>
       <a href="/qqq/form-1" >
       <h1 className='rnc'>RESEARCH AND CONSULTANCY CELL</h1></a>
    </div>

    <Banner/>
      <Des/>
      <Foot/>


      
     
    
    <Route path="/home" exact element={<Page />} />

     <Route path="/qqq/sign-in" element={<Login />} />
    <Route path="/qqq/sign-up" element={<SignUp />} />
   <Route path="/qqq/form-1" element={<Form1 />} />
   <Route path="/qqq/add-details" element={<AddD />} />
      
   </Switch>
       </Router>
  )
}

export default NavBar