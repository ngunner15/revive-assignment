import Number from '../Number';

export default function Review(props) {
  return (
    <div>
      <div className="title">
        <Number number="5" className="number" />
        <h3>REVIEW</h3>
      </div>
      <div className="review-info">
        <div className="review-content">
          <span>Current Plan</span>
          <p className="right-side">9 Items - Weekly</p>
        </div>
        <div className="review-content">
          <span>Delivery Day</span>
          <p className="right-side">Tuesdays</p>
        </div>
      </div>
      <div className="review-price">
        <div className="review-content">
          <span>Shipping</span>
          <p className="right-side">FREE</p>
        </div>
        <div className="review-content">
          <span>Subtotal</span>
          <p className="right-side">$63.00</p>
        </div>
      </div>
      <div className="review-confirmation">
        <input type="checkbox" />
        <p className="review-terms">I’ve read and accept the <u>terms and conditions</u> & <u>privacy policy.</u></p>
      </div>
      <button className="checkout-button continue-button">Complete</button>
      <p className="review-skip">You can skip or pause a delivery any time!</p>
      <p>*Just be sure to make any changes before 9 AM on Thursdays. For holidays, expect your order to be delivered a day later or earlier. We will email you with tracking information to track your order - no hassles!</p>
      <div className="review-info">
        <div className="review-info-block">
          <img src="/review1.png" alt="customer support"></img>
          <img src="/review2.png" alt="change cups"></img>
        </div>
        <div className="review-info-block">
          <img src="/review3.png" alt="skip delivery"></img>
          <img src="/review4.png" alt="change plan"></img>
        </div>
      </div>
    </div>
  );
}