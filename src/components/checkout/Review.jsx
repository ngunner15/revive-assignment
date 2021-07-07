import { useLocation } from 'react-router-dom';
import Number from '../Number';
import '../../styles/checkout/review.css';

export default function Review(props) {

  const location = useLocation();
  // console.log(`The Number:${location.state}`);
  let finalPrice = (location.state.pricePerCup * location.state.totalCups);
  const roundAccurately = Math.round(finalPrice * 100) / 100;
  
  return (
    <div className="review">
      <div className="title">
        <Number number="5" className="number" />
        <h3>REVIEW</h3>
      </div>
      <div className="review-info">
        <div className="review-content">
          <span>Current Plan</span>
          <p className="right-side"><strong>9 Items - Weekly</strong></p>
        </div>
        <div className="review-content">
          <span>Delivery Day</span>
          <p className="right-side"><strong>Tuesdays</strong></p>
        </div>
      </div>
      <div className="review-price">
        <div className="review-content">
          <span>Shipping</span>
          <p className="right-side"><strong>FREE</strong></p>
        </div>
        <div className="review-content">
          <span>Subtotal</span>
          <p className="right-side"><strong>${roundAccurately}</strong></p>
        </div>
      </div>
      <div className="review-confirmation">
        <input type="checkbox" />
        <p className="review-terms">I’ve read and accept the <u>terms and conditions</u> & <u>privacy policy.</u></p>
      </div>
      <button className="checkout-button continue-button"><strong>Complete</strong></button>
      <div className="review-msg">
        <p><strong>You can skip or pause a delivery any time!</strong></p>
        <p>*Just be sure to make any changes before 9 AM on Thursdays. For holidays, expect your order to be delivered a day later or earlier. We will email you with tracking information to track your order - no hassles!</p>
      </div>
    </div>
  );
}
