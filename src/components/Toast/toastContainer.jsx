import React, { useState} from "react";
import Toast from "./toast";
import "./toast.css"


function ToastContainer () {

  const [toasts, setToasts] = useState([]);
  let idCounter = 0;

  const toastOptions = [
    {message: "Saved Successfully!", type: "success", duration: 3000,},
    {message: "Password Incorrect!", type: "error", duration: 4000},
    {message: "New Notification!", type: "info", duration: 3500},
    {message: "Be Careful!", type: "warning", duration: 5000},
  ]

  function addToast () {
    const id = idCounter++;
    const randomToast = toastOptions[Math.floor(Math.random() * toastOptions.length)];

    setToasts([...toasts, {id, ...randomToast }]);
  }

  function removeToast(id) {
    setToasts((prev) => prev.filter((toast) => toast.id !==id));
  }

  return (
    <div>
      <button className="showToastBtn"
      onClick={addToast}>Show Toast</button>

      {toasts.map(toast => (
         <Toast 
         key = {toast.id}
         message={toast.message}
         type={toast.type}
         duration={toast.duration}
         onClose={() => removeToast(toast.id)}
         />
      ))}
    </div>
  );
}

export default ToastContainer;


