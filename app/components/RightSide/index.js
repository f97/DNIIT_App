/**
 *
 * RightSide
 *
 */

import React, { memo } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { RightWrapper } from './styled';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RightSide() {
  return (
    <RightWrapper>
      <FacebookProvider appId="365103820781953">
        <Page href="https://www.facebook.com/dniit.dn" tabs="timeline" />
      </FacebookProvider>
    </RightWrapper>
  );
}

RightSide.propTypes = {};

export default memo(RightSide);
