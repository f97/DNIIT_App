/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Post from 'containers/Post/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { Classes } from '@blueprintjs/core';
import GlobalStyle from '../../global-styles';
import { AppWrapper } from './styled';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

export default function App() {
  return (
    <AppWrapper className={`${Classes.DARK}`}>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/:lang" component={HomePage} />
        <Route exact path="/:lang/:postID" component={Post} />
        <Redirect to="/vi" />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
