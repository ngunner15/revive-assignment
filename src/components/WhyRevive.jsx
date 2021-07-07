import '../styles/why-revive.css';

export default function WhyRevive(props) {
  return (
    <div className="why-revive">
      <img srcSet="cups.png 306w, cupslp.png 566w" sizes="(max-width: 1280px) 306px, 566px" alt="Variety Cups" />
      <div className="why-revive-content">
        <h3>WHY REVIVE</h3>
        <p>Our goal is to help simplify your busy lifestyle with energizing, affordable, pre-portioned superfood smoothies and deliciously prepared meals. Simply select a plan, choose your superfood picks, and have it delivered frozen right to your door. Best of all, shipping is always FREE!</p>
      </div>
    </div>
  );
}
