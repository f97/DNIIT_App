/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterWrap = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #384b59;
`;

const CopyRight = styled.div`
  color: #444;
  text-align: center;
  font-size: 16px;
  margin-bottom: 5px;
`;

function Footer() {
  return (
    <FooterWrap>
      <img
        alt="logos des partenaires"
        id="logopartenaires"
        src="https://dniit-i3s.cnrs.fr/sites/default/files/logo-partenaire-mjq.png"
      ></img>
      <CopyRight>
        Copyright © {new Date().getFullYear()}, dniit-i3s.cnrs.fr
      </CopyRight>
    </FooterWrap>
  );
}

Footer.propTypes = {};

export default memo(Footer);
