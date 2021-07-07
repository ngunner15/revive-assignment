import '../../styles/checkout/info.css';

export default function Info(props) {
  return (
    <div className="info">
      <div className="info-block">
        <img src="/review1.png" alt="customer support"></img>
        <img src="/review2.png" alt="change cups"></img>
      </div>
      <div className="info-block">
        <img src="/review3.png" alt="skip delivery"></img>
        <img src="/review4.png" alt="change plan"></img>
      </div>
    </div>
  );
}
