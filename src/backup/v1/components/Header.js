import { NavLink } from 'react-router-dom';
import { icons } from '../icons';
import './Header.css';

function Header(props) {
  return (
    <header>
      <div className="header-section">
        <div className="logo-container">
          <a href="." className="logo">
            :Portfoilo
          </a>
        </div>
        <nav>
          <NavLink
            to="/project"
            className="nav-tab"
            activeClassName="nav-tab-active"
            replace
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="nav-tab"
            activeClassName="nav-tab-active"
            replace
          >
            About
          </NavLink>
        </nav>
      </div>
      <div className="header-section">
        <a
          className="sns-link"
          href="https://www.instagram.com/w0_0ss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icons.instagram('icon-gray')}
        </a>
        <a
          className="sns-link"
          href="https://github.com/w00ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icons.github('icon-gray')}
        </a>
      </div>
    </header>
  );
}

export default Header;
