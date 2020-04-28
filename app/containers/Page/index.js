/**
 *
 * Page
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Page(props) {
  console.log('Page -> props', props);
  useInjectReducer({ key: 'page', reducer });
  useInjectSaga({ key: 'page', saga });

  return (
    <div>
      <Helmet>
        <title>Page</title>
        <meta name="description" content="Description of Page" />
      </Helmet>
    </div>
  );
}

Page.propTypes = {};

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Page);
