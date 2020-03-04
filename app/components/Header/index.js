/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderLogo } from './styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo />
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default memo(Header);
