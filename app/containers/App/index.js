/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Post from 'containers/Post/Loadable';
import Page from 'containers/Page/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Category from 'containers/Category/Loadable';
import Search from 'containers/Search/Loadable';

import { Classes } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import GlobalStyle from '../../global-styles';
import { AppWrapper } from './styled';
import makeSelectApp from './selectors';

export function App() {
  return (
    <AppWrapper className={`${Classes.DARK}`}>
      <Switch>
        <Route exact path="/:lang(en|vi|fr)" component={HomePage} />
        <Route exact path="/:lang(en|vi|fr)/:postID" component={Post} />
        <Route exact path="/:lang(en|vi|fr)/p/:pageID" component={Page} />
        <Route exact path="/:lang(en|vi|fr)/search/:key" component={Search} />
        <Route exact path="/:lang(en|vi|fr)/cat/:catID" component={Category} />
        <Redirect to="/vi" />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(App);
