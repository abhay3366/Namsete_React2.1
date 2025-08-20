import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { FaCartArrowDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const HeaderDiv = styled.div`
  &.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  img {
    width: 150px;
  }
`;

const NavItem = styled.div`
  &.nav-item {
    ul {
      display: flex;
      list-style: none;
      gap: 15px;
      align-items: center;
      padding: 0;
      margin: 0;
    }
    li {
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #4caf50;
        }
      }
      button {
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        background-color: #4caf50;
        color: white;
        border-radius: 4px;
        &:hover {
          background-color: #45a049;
        }
      }
    }
  }
`;

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem)
  return (
    <HeaderDiv className="header">
      <div>
        <img src={LOGO_URL} alt="Swiggy Logo" />
      </div>
      <NavItem className="nav-item">
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
            <Link to="/cart">
              <FaCartArrowDown /> {cartItem.length}
            </Link>
          </li>

          <li>
            <button
              style={{ padding: "5px 10px", cursor: "pointer" }}
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName === "Login" ? (
                <>
                  <FaSignInAlt style={{ marginRight: "5px" }} /> Login
                </>
              ) : (
                <>
                  <FaSignOutAlt style={{ marginRight: "5px" }} /> Logout
                </>
              )}
            </button>
          </li>

          <li>
            {onlineStatus ? (
              <FaCircle size={20} color="green" />
            ) : (
              <FaCircle size={20} color="red" />
            )}
          </li>

          <li>
            <FaUser style={{ marginRight: "5px" }} /> {loggedInUser}
          </li>
        </ul>
      </NavItem>
    </HeaderDiv>
  );
};

export default Header;
