/**
 *
 * HomeWidget
 *
 */

import React, { memo } from 'react';
import { WidgetWrapper, WidgetImage } from './styled';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function HomeWidget() {
  return (
    <WidgetWrapper>
      <WidgetImage src="http://ifi.edu.vn/uploads/banners/hocbongths1_1.jpg" />
    </WidgetWrapper>
  );
}

HomeWidget.propTypes = {};

export default memo(HomeWidget);
