/**
 *
 * Nav
 *
 */

import React, { memo, useState, useEffect } from 'react';
import {
  Navbar,
  Alignment,
  Button,
  Popover,
  Menu,
  Position,
  MenuItem,
  PopoverInteractionKind,
  InputGroup,
} from '@blueprintjs/core';
import PropTypes from 'prop-types';
import history from '../../utils/history';
// import styled from 'styled-components';

function Nav(props) {
  const { lang, keySearch } = props;
  const [key, setKey] = useState('');
  const [menuJson, setJsonMenu] = useState({
    1: {
      0: 'INSTITUTE',
      1: 'A WORD FROM THE DIRECTOR',
      2: 'PRESENTATION',
      3: 'OFFICIAL DOCUMENTS',
      4: 'CONTACT',
    },
    2: {
      0: 'RESEARCH',
      1: 'INTRODUCTION',
      2: 'TEAMS-PROJECTS',
      3: 'DOCUMENTATION',
    },
    3: {
      0: 'TOPICALITY',
    },
  });

  const handleSearch = () => {
    history.push(`/${lang}/search/${key}`);
  };

  useEffect(() => {
    if (lang === 'vi') {
      setJsonMenu({
        1: {
          0: 'VIỆN',
          1: 'LỜI NGỎ CỦA GIÁM ĐỐC',
          2: 'GIỚI THIỆU',
          3: 'TÀI LIỆU CHÍNH THỨC',
          4: 'LIÊN HỆ',
        },
        2: {
          0: 'NGHIÊN CỨU',
          1: 'GIỚI THIỆU',
          2: 'NHÓM-ĐỀ ÁN',
          3: 'TÀI LIỆU',
        },
        3: {
          0: 'THỜI SỰ',
        },
      });
    } else if (lang === 'fr') {
      setJsonMenu({
        1: {
          0: 'INSTITUT',
          1: 'LE MOT DU DIRECTEUR',
          2: 'PRÉSENTATION',
          3: 'DOCUMENTS OFFICIELS',
          4: 'CONTACT',
        },
        2: {
          0: 'RECHERCHE',
          1: 'PRÉSENTATION',
          2: 'ÉQUIPES-PROJETS',
          3: 'DOCUMENTATION',
        },
        3: {
          0: 'ACTUALITÉS',
        },
      });
    } else {
      setJsonMenu({
        1: {
          0: 'INSTITUTE',
          1: 'A WORD FROM THE DIRECTOR',
          2: 'PRESENTATION',
          3: 'OFFICIAL DOCUMENTS',
          4: 'CONTACT',
        },
        2: {
          0: 'RESEARCH',
          1: 'INTRODUCTION',
          2: 'TEAMS-PROJECTS',
          3: 'DOCUMENTATION',
        },
        3: {
          0: 'TOPICALITY',
        },
      });
    }
  }, [lang]);

  const openCatPage = (id) => {
    history.push(`/${lang}/cat/${id}`);
  };

  const openPage = (id) => {
    history.push(`/${lang}/p/${id}`);
  };

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Button
          className="bp3-minimal"
          icon="home"
          onClick={() => {
            history.push(`/${lang}`);
          }}
        />
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          content={
            <Menu>
              <MenuItem
                text={menuJson[1][1]}
                onClick={() => openPage('5ea8479bf8dd5e0017a665e0')}
              />
              <MenuItem
                text={menuJson[1][2]}
                onClick={() => openPage('5eae199904747b0017acf895')}
              />
              <MenuItem
                text={menuJson[1][3]}
                onClick={() => openPage('5eae1a8a04747b0017acf896')}
              />
              <MenuItem
                text={menuJson[1][4]}
                onClick={() => openPage('5eae1b8004747b0017acf897')}
              />
            </Menu>
          }
          position={Position.BOTTOM}
        >
          <Button className="bp3-minimal" text={menuJson[1][0]} />
        </Popover>
        <Popover
          content={
            <Menu>
              <MenuItem text={menuJson[2][1]} />
              <MenuItem text={menuJson[2][2]} />
              <MenuItem text={menuJson[2][3]} />
            </Menu>
          }
          position={Position.BOTTOM}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className="bp3-minimal" text={menuJson[2][0]} />
        </Popover>
        <Button
          text={menuJson[3][0]}
          minimal
          onClick={() => openCatPage('5eacce3e7a69800017631dca')}
        />
        <Navbar.Divider />
        <InputGroup
          leftIcon="search"
          placeholder={keySearch || ''}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              handleSearch();
            }
          }}
          rightElement={
            <Button
              minimal
              rightIcon="key-enter"
              onClick={handleSearch}
            ></Button>
          }
        />
      </Navbar.Group>
    </Navbar>
  );
}

Nav.propTypes = {
  lang: PropTypes.string,
  keySearch: PropTypes.string,
};

export default memo(Nav);
