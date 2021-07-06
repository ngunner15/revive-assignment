import Header from './Header';
import Account from './Account';
import Payment from './Payment';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Review from './Review';
import Footer from '../Footer';
import '../../styles/App.css';

function Checkout() {
  return (
    <div className="checkout">
      <Header />
      <Account />
      <Payment />
      <Shipping />
      <Delivery />
      <Review />
      <Footer />
      {/* <h1>This is the Checkout Page!!!</h1> */}
    </div>
  );
}

export default Checkout;
