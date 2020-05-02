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
import Page from 'containers/Page/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Category from 'containers/Category/Loadable';
import Search from 'containers/Search/Loadable';

import { Classes } from '@blueprintjs/core';
import GlobalStyle from '../../global-styles';
import { AppWrapper, AppMain, MainSite } from './styled';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import RightSide from '../../components/RightSide';

export default function App() {
  return (
    <AppWrapper className={`${Classes.DARK}`}>
      <Header />
      <Nav />
      <AppMain>
        <MainSite>
          <Switch>
            <Route exact path="/:lang" component={HomePage} />
            <Route exact path="/:lang/:postID" component={Post} />
            <Route exact path="/:lang/p/:pageID" component={Page} />
            <Route exact path="/:lang/search/:key" component={Search} />
            <Route exact path="/:lang/cat/:catID" component={Category} />
            <Redirect to="/vi" />
            <Route component={NotFoundPage} />
          </Switch>
        </MainSite>

        <RightSide />
      </AppMain>

      <GlobalStyle />
    </AppWrapper>
  );
}
