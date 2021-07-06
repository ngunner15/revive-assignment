import Number from '../Number';
import '../../styles/checkout/shipping.css';

export default function Account(props) {
  return (
    <div className="shipping">
      <div className="title">
        <Number number="3"  className="number" />
        <h3>YOUR SHIPPING ADDRESS</h3>
      </div>
      <div className="name">
        <div className="labels">
          <label htmlFor="fname">First Name</label>
          <label htmlFor="lname">Last Name</label>
        </div>
        <div className="inputs">
          <input id="fname" type="text" />
          <input id="lname" type="text" />
        </div>
      </div>
      <label htmlFor="address">Address (street Address, No. PO Boxes)</label>
      <input id="address" type="text" />
      <label htmlFor="apartment">Apartment, Suite, Unit, etc.</label>
      <input id="apartment" type="text" />
      <div className="city-postalcode">
        <div className="labels">
          <label htmlFor="city">City</label>
          <label htmlFor="postalcode">Postal Code</label>
        </div>
        <div className="inputs">
          <input id="city" type="text" />
          <input id="postalcode" type="text" />
        </div>
      </div>
      <div className="province-phone">
        <div className="labels">
          <label htmlFor="province">Province</label>
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="inputs">
          <input id="province" type="text" />
          <input id="phone" type="tel" />
        </div>
      </div>
    </div>
  );
}
