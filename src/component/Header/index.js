import { ReactComponent as Github } from './icon_github.svg';
import { ReactComponent as Instagram } from './icon_instagram.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-section">
          <h2>
            <a href=".">:Portfolio</a>
          </h2>
        </div>

        <div className="header-section">
          <a
            className="sns-link"
            href="https://www.instagram.com/w0_0ss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            className="sns-link"
            href="https://github.com/w00seong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
