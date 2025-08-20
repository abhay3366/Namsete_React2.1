import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem)
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
            <Link to="/cart">Cart {cartItem.length}</Link>
          </li>
          <li>
            <button
              name="Login"
              style={{ padding: "5px 10px", cursor: "pointer" }}
              onClick={() => {
                btnName == "login" ? setbtnName("logout") : setbtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{onlineStatus == true ? "Online" : "Offline"}</li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
