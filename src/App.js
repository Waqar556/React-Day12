import React from "react";
import Form from "./Form";
import { useState } from "react";
const App=()=>{
  const [text,setText]=useState("Hello");

  return(
      <>
      <Form text={text} setText={setText}/>
      </>

  )
}
export default App;