import '../../styles/checkout/header-checkout.css';

export default function Header(props) {
  return (
    <div className="header-checkout">
      <img src="logo_header.png" alt="Revive Superfoods" />
      <div className="header-options">
        <span>Choose<br/> your plan</span>
        <span>Build<br/> Your Box</span>
        <span>Checkout</span>
      </div>
    </div>
  );
}
