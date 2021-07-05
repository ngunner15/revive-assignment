import '../styles/why-revive.css';

export default function WhyRevive(props) {
  return (
    <div className="why-revive">
      <div className="why-revive-title">
        <h3>WHY REVIVE</h3>
        <p>Our goal is to help simplify your busy lifestyle with energizing, affordable, pre-portioned superfood smoothies and deliciously prepared meals. Simply select a plan, choose your superfood picks, and have it delivered frozen right to your door. Best of all, shipping is always FREE!</p>
      </div>
      <div className="pusateris">
        <h3 className="find-us">FIND US AT THESE <br /> SELECT RETAILERS</h3>
        <img src="pusateris.png" alt="Pusateris" />
        <img src="pusateris.png" alt="Pusateris" />
        <img src="pusateris.png" alt="Pusateris" />
      </div>
      <div className="information">
        <div className="info-block">
          <img src="logo/clock.png" alt="Clock" />
          <h4>MEALS READY IN MINUTES</h4>
        </div>
        <div className="info-block">
          <img src="logo/chef's-hat.png" alt="Chef's Hat" />
          <h4>CHEF CRAFTED</h4>
        </div>
        <div className="info-block">
          <img src="logo/hand.png" alt="Hand" />
          <h4>PRESERVATIVE-FREE</h4>
        </div>
        <div className="info-block">
          <img src="logo/truck.png" alt="Truck" />
          <h4>ALWAYS FREE SHIPPING</h4>
        </div>
      </div>
    </div>
  );
}
