import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import SkipNavLink from '../SkipLinkNavigation/SkipNavLink';
import SkipNavContent from '../SkipLinkNavigation/SkipNavContent';
import ReactDOM from 'react-dom';

const DefaultLayout = (props) => {
  const {
    pageComponent: Component, matchProps,
  } = props;

  return (
    <>
      <Header />
      <SkipNavContent id='body-content'>
        <div className="default-layout-content-container">
          <Component {...matchProps} />
        </div>
      </SkipNavContent>
      <SkipNavContent id='footer-content'>
        <Footer />
      </SkipNavContent>
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
