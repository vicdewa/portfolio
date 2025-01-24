import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
    return (
    <header>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Mes projets</Link></li>
          <li><Link to="/bio">Qui suis-je?</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
