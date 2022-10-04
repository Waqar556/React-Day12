import React, {useState } from 'react'
import axios from 'axios';




const Form = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
   
  const handlechange=()=>{
  axios.post('https://dummyjson.com/products/add', {name,email})
  .then((response)=> {
    console.log(response.data);
    console.log(response.status);
    
  });
  }
 

  return (
    <>
      <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
      <input type="email" onChange={(e) => setEmail(e.target.value)}/><br/>
      <button onClick={handlechange}>submit</button>
    </>
  )
}

export default Form;