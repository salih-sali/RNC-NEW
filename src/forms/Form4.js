import React, { useState } from 'react'
import './forms.css';


function Form4() {

  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [year,setYear] = useState('')
  const [impact,setImpact] = useState('')
  const [govt,setGovt] = useState('')
  const [amount,setAmount] = useState('')

  const handleSub=(e)=>{
    e.preventDefault()
      console.log("name : "+name)
      console.log("title : "+title)
      console.log("year : "+year)
      console.log("impact : "+impact)
      console.log("govt or private : "+govt)
     console.log("amount : "+amount)
  }

  return (
    <div> 
      <h1 >Publications</h1>
    <div className="signupParentDiv">
    <h3 >Enter the details of published papers only..!</h3>
      <form >
        <label>Name</label>
        <br />
        <input style={{ width:"500px" }}
          className="input"
          type="text"
          //id="fname"
          //name="name"
          placeholder="Enter the name of author"
          value={name}
            onChange={(e)=>setName(e.target.value)}
          
        />
        <br />
        <label htmlFor="fname">Title</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="text"
          id="fname"
          //name="email"
          placeholder="Enter the title"
          value={title}
            onChange={(e)=>setTitle(e.target.value)}
          
        />
        <br />
        <label htmlFor="lname">Year</label>
        <br />
        <input
         style={{ width:"500px" }}
          className="input"
          type="number"
          //id="lname"
          //name="phone"
          placeholder="enter year of publication"
          value={year}
            onChange={(e)=>setYear(e.target.value)}

          
        />
         <br />
        <label htmlFor="lname">Impact Factor</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="number"
          //id="lname"
          //name="phone"
          placeholder="enter the impact factor"
          value={impact}
            onChange={(e)=>setImpact(e.target.value)}
          
        />
         <br />
        <label htmlFor="lname">MITS Affiliated  : </label>
        
        
        <input type="radio" value="yes" name="gender" /> YES
        <input type="radio" value="no" name="gender" /> NO
            

       
         <br />
        <label htmlFor="lname">Amount</label>
        <br />
        <input
          style={{ width:"500px" }}
          className="input"
          type="number"
          //id="lname"
          //name="phone"
          placeholder="enter the amount in Rupees"
          value={amount}
            onChange={(e)=>setAmount(e.target.value)}
        />
        
        <br />
        
        <br />
        <button  onClick={handleSub}>Submit</button>
        <br /><br />
        <button >Cancel</button>
      
      </form>
    </div>
  </div>
  )
}

export default Form4

