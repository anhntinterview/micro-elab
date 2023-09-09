import Image from 'next/image';
import * as React from 'react';
import TwitterIcon from './twitter.svg';
import FacebookIcon from './fb.svg';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="footer-section global-footer">
      <div className="footer-wrap global-padding">
        <div className="footer-subscribe">
          <h3 className="global-title">
            Subscribe to <span>new posts</span>
          </h3>
          <div className="subscribe-section">
            <div className="subscribe-wrap">
              <form data-members-form="subscribe" className="subscribe-form">
                <input
                  data-members-email=""
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
                <button className="global-button" type="submit">
                  Subscribe
                </button>
              </form>
              <div className="subscribe-alert">
                <small className="alert-loading global-alert">
                  Processing your application
                </small>
                <small className="alert-success global-alert">
                  Please check your inbox and click the link to confirm your
                  subscription.
                </small>
                <small className="alert-error global-alert">
                  There was an error sending the email
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2 className="is-logo">
                Freedom Walking Blog
              </h2>
            </div>
            <p className="footer-description">
              Sharing the opportunity together!
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-column is-social">
              <small>Social</small>
              <ul>
                <li>
                  <a href="https://www.facebook.com/ghost">
                    <Image src={FacebookIcon} alt="_fb" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/fuekothemes">
                    <Image src={TwitterIcon} alt="_tw" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <small>About</small>
              <ul>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
                <li>
                  <a href="/not-found/">404</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-column">
              <small>Membership</small>
              <ul>
                <li>
                  <a href="/tags/">Tags</a>
                </li>
                <li>
                  <a href="/authors/">Authors</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            © <a href="/">Freedom Walking</a> 2023. Created by{' '}
            <span>Robert</span> <span>NGUYEN</span>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
