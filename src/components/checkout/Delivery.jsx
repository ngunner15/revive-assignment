import Number from '../Number';

export default function Delivery(props) {

  let date = new Date();

  // Set the current date
  let todayDate = date.getFullYear().toString() +
                  '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
                  '-' + date.getDate().toString().padStart(2, 0);

  return (
    <div>
      <h2>CHECKOUT</h2>
      <div className="title">
        <Number number="4" className="number" />
        <h3>CHOOSE YOUR DELIVERY DAY</h3>
      </div>
      <input type="date" id="date" name="delivery-date"
        min={todayDate} max="2022-12-31"
        placeholder="Tuesday, April 6th 2021"
      />
      <label htmlFor="delivery">Delivery Instructions</label>
      <select name="delivery" id="delivery">
        <option value="1">Leave with concierge</option>
        <option value="2">Leave on front porch</option>
        <option value="3">Leave at front door</option>
        <option value="4">Leave at back door</option>
        <option value="5">Other</option>
      </select>
    </div>
  );
}
