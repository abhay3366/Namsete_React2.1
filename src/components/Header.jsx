import { LOGO_URL } from "../utils/contants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;