/**
 *
 * Nav
 *
 */

import React, { memo, useState } from 'react';
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
import history from '../../utils/history';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Nav() {
  const [key, setKey] = useState('');
  const handleSearch = () => {
    const lang = `${window.location.pathname}`.match(/\/([a-z]{2})/)[1];
    history.push(`/${lang}/search/${key}`);
  };

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Button
          className="bp3-minimal"
          icon="home"
          onClick={() => {
            history.push('/');
          }}
        />
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          content={
            <Menu>
              <MenuItem text="LỜI NGỎ CỦA GIÁM ĐỐC" />
              <MenuItem text="GIỚI THIỆU" />
              <MenuItem text="TÀI LIỆU CHÍNH THỨC" />
              <MenuItem text="LIÊN HỆ" />
            </Menu>
          }
          position={Position.BOTTOM}
        >
          <Button className="bp3-minimal" text="VIỆN" />
        </Popover>
        <Popover
          content={
            <Menu>
              <MenuItem text="GIỚI THIỆU" />
              <MenuItem text="NHÓM-ĐỀ ÁN" />
              <MenuItem text="TÀI LIỆU" />
            </Menu>
          }
          position={Position.BOTTOM}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className="bp3-minimal" text="NGHIÊN CỨU" />
        </Popover>
        <Popover
          content={<Menu>...</Menu>}
          position={Position.BOTTOM}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className="bp3-minimal" text="TUYỂN SINH" />
        </Popover>
        <Navbar.Divider />
        <InputGroup
          leftIcon="search"
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
              onClick={() => {
                handleSearch();
              }}
            ></Button>
          }
        />
      </Navbar.Group>
    </Navbar>
  );
}

Nav.propTypes = {};

export default memo(Nav);
