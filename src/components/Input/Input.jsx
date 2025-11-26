import React, { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ClearIcon from '@mui/icons-material/Clear';
import "./Input.css"


function Input () {

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  function handleChange (event) {
    setPassword(event.target.value);
  }

  function toggleVisibility ()  {
    setShowPassword((prev) => !prev);
  };


  let inputType ;

  if (showPassword) {
   inputType = "text";
  } else {
    inputType = "password";
  }

  function clearInput () {
  
    if (password) {
      setPassword("");
    } 
  }

  return (
  <div>
    <input
    className="input"
    placeholder="Password"
    onChange={handleChange}
    value={password}
    type={inputType}
    >
    </input>

    <button
    className="button eye"
    type="button"
    onClick={toggleVisibility}
    > { showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </button>

   {password && (
    <button
    className="button clear"
    type="button"
    onClick={clearInput}
    >
    <ClearIcon /> 
    </button>
   )} 

  </div>
  );
}

export default Input;