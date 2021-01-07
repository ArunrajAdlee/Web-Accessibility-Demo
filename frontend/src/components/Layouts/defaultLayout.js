import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import SkipNavLink from '../SkipLinkNavigation/SkipNavLink';
import ReactDOM from 'react-dom';

const DefaultLayout = (props) => {
  const {
    pageComponent: Component, matchProps,
  } = props;

  return (
    <>
      <div className="default-layout-content-container">
        <header>
          <Header />
        </header>
        <main id='body-content' className="content-wrap">
          <Component {...matchProps} />
        </main>
        <footer id='footer-content' className="footer-container">
          <Footer />
        </footer>
      </div>
      {/** Skip nav links */}
      {ReactDOM.createPortal(
        <React.Fragment>
          <SkipNavLink id="body-content">
            Skip to movies
            </SkipNavLink>
          <SkipNavLink id="footer-content">
            Skip to footer
            </SkipNavLink>
        </React.Fragment>,
        document.getElementById('skip-links-root')
      )}
    </>
  );
};

export default DefaultLayout;
