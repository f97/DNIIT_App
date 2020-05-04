/**
 *
 * RightSide
 *
 */

import React, { memo } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RightWrapper, LanguageBox } from './styled';

function RightSide(props) {
  const { type, id } = props;
  let openLink = '';
  if (type === 'post') {
    openLink = `/${id}`;
  } else if (type === 'page') {
    openLink = `/p/${id}`;
  } else if (type === 'category') {
    openLink = `/cat/${id}`;
  }

  return (
    <RightWrapper>
      <LanguageBox>
        <Link to={`/en${openLink}`}>
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
        <Link to={`/vi${openLink}`}>
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
        <Link to={`/fr${openLink}`}>
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

RightSide.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};

export default memo(RightSide);
