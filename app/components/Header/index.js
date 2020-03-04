/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderLogo, BackgroudHeader } from './styled';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo src="http://ifi.edu.vn/images/logo-5-mau_160x160.png" />
      <BackgroudHeader src="http://ifi.edu.vn/uploads/banners/1500-324.png" />
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default memo(Header);
