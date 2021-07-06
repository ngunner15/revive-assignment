import Number from '../Number';
import '../../styles/checkout/payment.css';

export default function Payment(props) {
  return (
    <div className="payment">
      <div className="title">
        <Number number="2" className="number" />
        <h3>SELECT A PAYMENT METHOD</h3>
      </div>
      <div className="payment-buttons">
        <button className="credit-btn"><strong>Credit Card</strong></button>
        <button><img src="/logo/paypal.png" alt="paypal logo" /></button>
        <button><img src="/logo/gpay.png" alt="google pay logo" /></button>
      </div>
      <label htmlFor="credit-card">Credit Card Information</label>
      <div className="credit-card-input">
        <button><img src="/logo/visa.png" alt="visa logo" /></button>
        <button><img src="/logo/mastercard.png" alt="mastercard logo" /></button>
        <input id="credit-card" type="text" placeholder="Card Number" />
        <input id="expiry-date" type="text" placeholder="MM/YY" />
      </div>
    </div>
  );
}
