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
      <HeaderLogo
        src="https://dniit-i3s.cnrs.fr/sites/default/files/logo_1000x250.jpg"
        width="450"
        px
        heigt="200px"
      />
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default memo(Header);
