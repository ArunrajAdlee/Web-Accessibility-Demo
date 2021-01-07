import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faStar } from '@fortawesome/free-solid-svg-icons';

const Error404 = () => {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon className="error-image" icon={faSadTear} />
        <h1>404</h1>
        <h4>An error occured</h4>
        <h5>Either go back or hit the header text to go to the home page!</h5>
      </div>
    </>
  );
}

export default Error404;
