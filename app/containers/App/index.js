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
        <Redirect to="/en" />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
