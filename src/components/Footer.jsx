const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div className="footer-column">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 Swiggy Clone - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;