import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #1f2937; /* gray-800 */
  color: white;
  padding: 2rem 1rem;
  margin-top: 2rem;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      cursor: pointer;
      transition: color 0.2s ease;

      &:hover {
        color: #facc15; /* yellow-400 */
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #9ca3af; /* gray-400 */
  border-top: 1px solid #374151; /* gray-700 */
  padding-top: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Column 1 */}
        <FooterColumn>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
          </ul>
        </FooterColumn>

        {/* Column 2 */}
        <FooterColumn>
          <h4>Contact us</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </FooterColumn>

        {/* Column 3 */}
        <FooterColumn>
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </FooterColumn>

        {/* Column 4 - Social */}
        <FooterColumn>
          <h4>Follow us</h4>
          <SocialIcons>
            <a href="#">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </SocialIcons>
        </FooterColumn>
      </FooterContainer>

      {/* Bottom */}
      <FooterBottom>
        © 2025 Swiggy Clone - All rights reserved
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
