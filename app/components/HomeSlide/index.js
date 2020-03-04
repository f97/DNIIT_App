/* eslint-disable react/jsx-props-no-spreading */
/**
 *
 * HomeSlide
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Slide } from 'react-slideshow-image';
import './index.css';

const slideImages = [
  'http://ifi.edu.vn/uploads/slides/cover-website-1349x500-pxv3.png',
  'http://ifi.edu.vn/uploads/slides/cover-website-1349x500-pxv3.png',
  'http://ifi.edu.vn/uploads/slides/cover-website-1349x500-pxv3.png',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const HomeSlide = () => (
  <div className="slide-container">
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  </div>
);

HomeSlide.propTypes = {};

export default memo(HomeSlide);
