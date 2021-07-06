import Number from '../Number';

export default function Account(props) {
  return (
    <div>
      <h2>CHECKOUT</h2>
      <div className="title">
        <Number number="1" className="number" />
        <h3>CREATE YOUR ACCOUNT</h3>
      </div>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="text" />
    </div>
  );
}
