import './Navigator.css';
import { ReactComponent as Instagram } from '../img/svg/instagram.svg';
import { ReactComponent as Github } from '../img/svg/github.svg';

function Navigator() {
  return (
    <div className="navigator">
      <div className="logo-container">
        <a href=".">
          <h1>:Portfolio</h1>
        </a>
      </div>

      <div className="nav-container">
        <nav>
          <div className="nav-tab current">
            <a href="#root">
              <h3>WELCOME</h3>
            </a>
          </div>
          <div className="nav-tab">
            <a href="#root">
              <h3>ABOUT</h3>
            </a>
          </div>
          <div className="nav-tab">
            <a href="#root">
              <h3>PROJECTS</h3>
            </a>
          </div>
        </nav>

        <div className="social">
          <a
            className="social-icon"
            target="_blank"
            href="https://www.instagram.com/w0_0ss/"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/w00ss"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
