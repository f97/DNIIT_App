/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
