import React, { useState, useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import "./toast.css"

function Toast (props) {

  useEffect(() => {
     const timer = setTimeout(() => {
    props.onClose();
  }, props.duration);

  return () => clearTimeout(timer);
  }, [props.duration, props.onClose]);
 

  return (

  <div className={"toast toast-" + props.type}>
     <p>{props.message}</p>
     <button 
     className="closeButton"
     onClick={props.onClose}
     >
      <ClearIcon />
     </button>
  </div>

);
}

export default Toast;

