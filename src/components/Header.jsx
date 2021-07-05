import '../styles/header.css';

export default function Header(props) {
  return(
    <div className="header">
      <span className="menu" />
      <img src="logo_header.png" alt="Revive Superfoods" />
      <span className="login" />
    </div>
  );
}