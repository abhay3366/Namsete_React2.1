import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {

  const [btnName,setbtnName]=useState("Login");

  return (
    <div className="header">
      <div>
        <img
          src={LOGO_URL}
          style={{ width: "150px" }}
          alt="Swiggy Logo"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button style={{padding:"5px 10px",cursor:"pointer"}} 
          onClick={()=>{
            btnName=="login"?setbtnName("logout"):setbtnName("login")
            
            }
            }>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;