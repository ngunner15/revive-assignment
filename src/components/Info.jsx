import '../styles/info.css';

export default function Info(props) {
  return (
    <div className="info">
      <div className="pusateris">
        <h3 className="find-us">FIND US AT THESE <span> SELECT RETAILERS</span></h3>
        <div className="pusateris-images">
          <img src="pusateris.png" alt="Pusateris" />
          <img src="pusateris.png" alt="Pusateris" />
          <img src="pusateris.png" alt="Pusateris" />
        </div>
      </div>
      <div className="info-images">
        <div className="info-block">
          <img srcSet="logo/clock.png 80w, logo/clocklp.png 120w" sizes="(max-width: 1280px) 80px, 120px" alt="Clock" />
          <h4>MEALS READY IN MINUTES</h4>
        </div>
        <div className="info-block">
          <img srcSet="logo/chef's-hat.png 80w, logo/chef's-hatlp.png 120w" sizes="(max-width: 1280px) 80px, 120px" alt="Chef's Hat" />
          <h4>CHEF CRAFTED</h4>
        </div>
        <div className="info-block">
          <img srcSet="logo/hand.png 80w, logo/handlp.png 120w" sizes="(max-width: 1280px) 80px, 120px" alt="Hand" />
          <h4>PRESERVATIVE-FREE</h4>
        </div>
        <div className="info-block">
          <img srcSet="logo/truck.png 80w, logo/trucklp.png 120w" sizes="(max-width: 1280px) 80px, 120px" alt="Truck" />
          <h4>ALWAYS FREE SHIPPING</h4>
        </div>
      </div>
    </div>
  );
}