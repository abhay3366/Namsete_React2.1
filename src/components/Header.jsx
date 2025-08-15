import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} style={{ width: "150px" }} alt="Swiggy Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
           <li>
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li>
            <button
              style={{ padding: "5px 10px", cursor: "pointer" }}
              onClick={() => {
                btnName == "login" ? setbtnName("logout") : setbtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{onlineStatus == true ? "Online" : "Offline"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
