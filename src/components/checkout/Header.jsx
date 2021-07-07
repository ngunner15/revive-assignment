import '../../styles/checkout/header-checkout.css';

export default function Header(props) {
  return (
    <div className="header-checkout">
      <img src="logo_header.png" alt="Revive Superfoods" />
      <div className="header-options">
        <p>Choose<span> Your Plan</span></p>
        <p>Build<span> Your Box</span></p>
        <p>Checkout</p>
      </div>
    </div>
  );
}
