import '../styles/footer.css';

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-main">

          <img src="logo.png" className="footer-logo" alt="Revive Superfoods" />
          <p><strong>JOIN OUR MAILING LIST FOR NEWS<br /> AND DISCOUNTS</strong></p>
          <div className="email-block">
            <input type="email" placeholder="Email Address"></input>
            <div className="email-block-icons">
              <img src="logo/instagram.png" alt="Instagram Icon" />
              <img src="logo/facebook.png" alt="Facebook Icon" />
              <img src="logo/twitter.png" alt="Twitter Icon" />
              <img src="logo/email.png" alt="Email Icon" />
            </div>
          </div>
          <div className="country">
            <span className="your-country">Your country/region:</span>
            <img className="canada-icon" src="canada.png" alt="Canada Icon" />
          </div>

        </div>
        <div className="footer-blocks">

          <div className="footer-block">
            <p><strong>QUICKLINKS</strong></p>
            <img src="logo/arrow.png" alt="Arrow Icon" />
          </div>
          <div className="footer-block">
            <p><strong>OUR COMPANY</strong></p>
            <img src="logo/arrow.png" alt="Arrow Icon" />
          </div>
          <div className="footer-block">
            <p><strong>SUPPORT</strong></p>
            <img src="logo/arrow.png" alt="Arrow Icon" />
          </div>
          <img className="canada-icon" src="canada.png" alt="Canada Icon" />

        </div>

        <div className="footer-link">

          <div className="footer-link-block">
            <p><strong>QUICKLINKS</strong></p>
            <ul>
              <li>Smoothies</li>
              <li>Oats</li>
              <li>Smoothie Bowls</li>
              <li>Supermeals</li>
              <li>Falafel Pops</li>
            </ul>
          </div>
          <div className="footer-link-block">
            <p><strong>OUR COMPANY</strong></p>
            <ul>
              <li>Our Story</li>
              <li>Rewards</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          <div className="footer-link-block">
            <p><strong>SUPPORT</strong></p>
            <ul>
              <li>Wholesale</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>
      </div>
      <footer>© REVIVE ORGANICS INC. 2020</footer>
    </div>
  );
}
