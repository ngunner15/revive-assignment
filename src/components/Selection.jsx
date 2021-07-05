import Number from './Number';

export default function Selection(props) {
  return(
    <div>
      <Number number="1" />
      <h3>PICK YOUR QUANTITY</h3>
      <h4>Quantity:</h4>
      <h4>Price per cup: <strong>$5.49</strong></h4>
      <Number number="2" />
      <h3>CHOOSE YOUR ITEMS</h3>
      <img src="box/rect1.png" alt="fruity box" />
      <img src="box/rect2.png" alt="best seller box" />
      <img src="box/rect3.png" alt="fit box" />
      <button className="continue">CONTINUE</button>
      <p>For bulk orders over 288 cups, please email: wholesale@revivesuperfoods.com</p>
      <img src="cups.png" alt="Variety Cups" />
    </div>
  );
}