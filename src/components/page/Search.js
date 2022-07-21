import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./Search.css"
import { useState } from 'react'
import axios from "axios";

function Search() {
const [listOfUsers, setListOfUsers] = useState([]);
const [data4, setData4] = useState([])
const [name1,setName1]=useState("title")
const [error, setError] = useState("");

// const handleSub=(e)=>{
//     e.preventDefault()
//     console.log(search)
// }

// }
const handleChange = ({ currentTarget: input }) => {
    //console.log("ghjk"+name1)
    setData4({ [input.name]: input.value });
};

// const title="Mongto"  ###########can be used
const handleS = async (e) => {
    e.preventDefault()
    // try {
        
        axios.get("http://localhost:8080/api/searching").then((response) => {
            setListOfUsers(response.data);
            console.log(response.data)
          });}

 const handleSq= async (e) => {
            e.preventDefault()
             try {
        const url = "http://localhost:8080/api/searching/ser";
        //const { data: res } = await axios.post(url, {title : title})  ### must be post 
        axios.post(url, data4).then((response) => {
            setListOfUsers(response.data);
            console.log(response.data)
          })
        //navigate("/sign-in")
        //console.log(res.message)
    
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message)
        }
    }}
    
    function handleSChange(e) {
        setName1(e.target.value);
        console.log("--"+name1)
      }

    return (
<div className='search'>
<h1>&nbsp;&nbsp;&nbsp;searching </h1>
<form>
<label>
    &nbsp;&nbsp; view all details of publications
    </label>&nbsp;&nbsp;&nbsp;
    <button onClick={handleS}>View all</button>

            <br/>
<br/>
<label>
     Ehoose field to be search
    </label>&nbsp;&nbsp;&nbsp;
   
    
  <select onChange={handleSChange}>
      <option value="title">Title</option>
      <option value="year">Year</option>
  
     </select>
     <br/>
     <br/>
     <label>
     Enter {name1} to search
    </label>&nbsp;&nbsp;
    <input style={{ width:"500px" }}
              className="input"
              type="text"
              id="fname"
              name={name1}
           
            onChange={handleChange}
            value={data4.title}
            
            
              required
            />&nbsp;&nbsp;
            
    <button onClick={handleSq}>search</button>
    
</form>
<br/>
<br/>
<br/>

{listOfUsers
.sort( (a,b)=> a.title.localeCompare(b.title) )
.map((user) => {
          return (
            <div><br/>
                
                &nbsp; &nbsp;
                <h6>Title: {user.title}&nbsp;&nbsp;
             Author: {user.author}&nbsp;&nbsp;
              year: {user.year}</h6>
            
            </div>
          );
        })}
<br/></div>
    )
    }

    
    export default Search