import React, {useState} from "react";
import style from "./Navbar.module.css";
function Navbar() {

  const[mobileView, setMobileView] = useState(false)
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <h1>Smytten</h1>
      </div>
      
      <div className={style.list}> 
      
          <li className={style.item}>Home</li>
          <li className={style.item}>Product</li>
          <li className={style.item}>Service</li>
          <li className={style.item}>Login</li>
        
      </div>
    </div>
  );
} 

export default Navbar;
