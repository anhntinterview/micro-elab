import * as React from 'react';
import { permanentMarker } from '@app/app/util/font';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="header-section">
      <div className="header-wrap global-padding">
        <div className="header-logo">
          <h1 className={`${permanentMarker.className}`}>There there! Don't cry baby!</h1>
        </div>
        <div className="header-nav">
          <span className="header-search search-open is-mobile">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z"></path>
            </svg>
          </span>
          <input id="toggle" className="header-checkbox" type="checkbox" />
          <label className="header-toggle" htmlFor="toggle">
            <span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </label>
          <nav>
            <ul>
              <li>
                <a href="/style-guide/">Style Guide</a>
              </li>
              <li className="is-dropdown">
                <input
                  id="li-toggle"
                  className="header-li-checkbox"
                  type="checkbox"
                />
                <label className="header-li-toggle" htmlFor="li-toggle">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z"></path>
                  </svg>
                </label>
                <ul>
                  <li>
                    <a href="/tags/">Tags</a>
                  </li>
                  <li>
                    <a href="/authors/">Authors</a>
                  </li>
                  <li>
                    <a href="/subscribe/">Subscribe</a>
                  </li>
                  <li>
                    <a href="/contact/">Contact</a>
                  </li>
                </ul>
              </li>
              <li className="header-search search-open is-desktop global-button">
                <input
                  id="search-toggle"
                  className="header-li-checkbox"
                  type="checkbox"
                />
                <label className="header-search-toggle" htmlFor="search-toggle">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z"></path>
                  </svg>
                  Search
                </label>
              </li>
              <li className="signup">
                <a href="/signup/" className="global-button">
                  Join
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
