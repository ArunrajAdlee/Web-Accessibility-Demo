import React from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import tmdb from '../../../assets/img/tmdb-logo.svg';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-content">
      <Row>
        <Col md={12} sm={12} tabIndex="0" role="text">
          <h4>Created By:</h4>
          <p>
            Brian Gamboc-Javiniar |
            Arunraj Adlee |
            Mackenzie Bellemore |
            Manpreet Sohal
          </p>
        </Col>
      </Row>
      <Row>
        <h4 className="m-auto">
          <a href="https://developers.themoviedb.org/3/getting-started" aria-label="Powered by the movie db" >
            Powered By:
            <img src={tmdb} alt="Tmbd Logo" />
          </a>
        </h4>
      </Row>
      <Row className="mt-2">
        <span className="m-auto">Copyright ©2020 All rights reserved</span>
      </Row>
    </div>
  </div>

);

export default Footer;
