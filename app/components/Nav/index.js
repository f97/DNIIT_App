/**
 *
 * Nav
 *
 */

import React, { memo } from 'react';
import {
  Navbar,
  Alignment,
  Button,
  Popover,
  Menu,
  Position,
  MenuItem,
  PopoverInteractionKind,
} from '@blueprintjs/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Nav() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Button className="bp3-minimal" icon="home" />
        <Popover
          interactionKind={PopoverInteractionKind.HOVER}
          content={
            <Menu>
              <MenuItem text="Child one" />
              <MenuItem text="Child two" />
              <MenuItem text="Child three" />
            </Menu>
          }
          position={Position.BOTTOM}
        >
          <Button className="bp3-minimal" text="Gioi Thieu" />
        </Popover>
        <Popover
          content={<Menu>...</Menu>}
          position={Position.BOTTOM}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className="bp3-minimal" text="Dao tao" />
        </Popover>
        <Popover
          content={<Menu>...</Menu>}
          position={Position.BOTTOM}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className="bp3-minimal" text="Tuyen Sinh" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
}

Nav.propTypes = {};

export default memo(Nav);
