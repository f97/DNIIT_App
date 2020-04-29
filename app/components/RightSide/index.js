/**
 *
 * RightSide
 *
 */

import React, { memo } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { Link } from 'react-router-dom';
import { RightWrapper, LanguageBox } from './styled';
// import PropTypes from 'prop-types';

function RightSide() {
  return (
    <RightWrapper>
      <LanguageBox>
        <Link to="/en">
          <img
            className="language-icon"
            typeof="foaf:Image"
            src="https://dniit-i3s.cnrs.fr/sites/all/modules/languageicons/flags/en.png"
            width="24"
            height="18"
            alt="English"
            title="English"
          />
        </Link>
        <Link to="/vi">
          <img
            className="language-icon"
            typeof="foaf:Image"
            src="https://dniit-i3s.cnrs.fr/sites/all/modules/languageicons/flags/vi.png"
            width="24"
            height="18"
            alt="Tiếng Việt"
            title="Tiếng Việt"
          />
        </Link>
        <Link to="/fr">
          <img
            className="language-icon"
            typeof="foaf:Image"
            src="https://dniit-i3s.cnrs.fr/sites/all/modules/languageicons/flags/fr.png"
            width="24"
            height="18"
            alt="Français"
            title="Français"
          />
        </Link>
      </LanguageBox>
      <FacebookProvider appId="365103820781953">
        <Page href="https://www.facebook.com/dniit.dn" tabs="timeline" />
      </FacebookProvider>
    </RightWrapper>
  );
}

RightSide.propTypes = {};

export default memo(RightSide);
