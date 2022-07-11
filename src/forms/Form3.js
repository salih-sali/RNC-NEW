import React, { useState } from 'react'
import './forms.css';
import { Navigate, useNavigate } from 'react-router-dom';

//fee reimbursement

function Form3() {

  const [fee,setFee] = useState('')
  //const [venue,setVenue] = useState('')
 // const [date,setDate] = useState('')
  //const [time,setTime] = useState('')
 // const [govt,setGovt] = useState('')
 // const [amount,setAmount] = useState('')
 const q=()=>{
  navigate('/home',{replace:true}) 
  
}
const navigate =useNavigate();
  const handleSub=(e)=>{
    e.preventDefault()
      console.log("fee : "+fee)
      //console.log("venue : "+venue)
      //console.log("date : "+date)
     // console.log("time : "+time)
     // console.log("govt or private : "+govt)
    // console.log("amount : "+amount)
  }

  return (
    <div> 
      
    <div className="signupParentDiv">
    <h3 >Enter the details of fee to be reimbursed</h3>
      <form >
      <br />
        <label htmlFor="fname">Name of student</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the name"
          
        />
         <br />
        <label htmlFor="fname">Faculty in charge</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the faculty name"
          
        />
         <br />
        <label htmlFor="fname">year</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="number"
          id="fname"
          //name="email"
          placeholder="Enter the year"
          
        />

<br />
        <label htmlFor="fname">type of program</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the type"
          
        />
        <br/>
        <label>Fee</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="number"
          //id="fname"
          //name="name"
          placeholder="Enter the fee to be reimbursed"
          //value={fee}
          
          
        />
        
        <br />
        <label htmlFor="fname">From</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the type of event"
         
        />
       

        <br />
        <br />
        <button  onClick={handleSub}>Submit</button>
        <br /><br />
        <button onClick={q}>Cancel</button>
      
      </form>
    </div>
  </div>
  )
}

export default Form3