import '../styles/footer.css';

export default function Footer(props) {
  return (
    <div className="footer">
      <img src="logo.png" alt="Revive Superfoods" />
      <div className="footer-content">
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
      <footer>© REVIVE ORGANICS INC. 2020</footer>
    </div>
  );
}
