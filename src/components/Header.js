import { Link } from "react-router-dom";
import Logo from "../assets/img/foodVilla.png";
const Title = () => (
  <a href='/'>
    <img className='logo' alt='logo' src={Logo} />
  </a>
);

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
