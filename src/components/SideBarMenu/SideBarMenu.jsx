import React, { useState } from "react";
import "./SidebarMenu.css";
import { Handshake } from "@mui/icons-material";

function SidebarMenu () {
  const [isOpen, setIsOpen] = useState(true);

   const menuItems = [
    {
      label: "Home",
      submenu: ["Our Aim", "Our Vision"],
    },
    {
      label: "Services",
      submenu: ["Service One", "Service Two"],
    },
    { label: "Contact" },
    { label: "About" },
  ];

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button 
      className="openButn"
      onClick={() => setIsOpen(true)}>Open Sidebar
      </button>

      
      {/* Sidebar */}
      <div 
      onClick={handleClose}
      className={isOpen ? "sidebarContainer": "closed"}>
        <ul className="labels">

          {menuItems.map((item, id) => (
            <li key={id}>
              {item.label}


              {isOpen && item.submenu && (
                <ul>
                  {item.submenu.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              )}


            </li>
          ))}

        </ul>
      </div>
    </>
  );
}
export default SidebarMenu;
