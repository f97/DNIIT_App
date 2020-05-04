/**
 *
 * Category
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import { Classes, Icon } from '@blueprintjs/core';
import reducer from './reducer';
import saga from './saga';
import ListPost from '../../components/ListPost';
import { getPostsAction } from './actions';
import makeSelectCategory from './selectors';
import { CatWrapper, Categories } from './styled';
import Header from '../../components/Header';
import { AppMain, MainSite } from '../App/styled';
import Nav from '../../components/Nav';
import RightSide from '../../components/RightSide';

export function Category(props) {
  useInjectReducer({ key: 'category', reducer });
  useInjectSaga({ key: 'category', saga });

  const { getPosts, match, category } = props;
  const { posts, cat, lang, requesting } = category;

  useEffect(() => {
    getPosts(match.params.lang, match.params.catID);
  }, [match.params.lang]);

  return (
    <>
      <Header />
      <Nav lang={lang} />
      <AppMain>
        <MainSite>
          <Helmet>
            <title>{cat.name}</title>
            <meta name="description" content={cat.name} />
          </Helmet>
          <CatWrapper>
            <Categories className={requesting ? Classes.SKELETON : ''}>
              <Link to={`/${lang}/`}>
                <Icon icon="home" />
              </Link>
              <Link to={`/${lang}/cat/${cat.id}`}>{cat.name}</Link>
            </Categories>
            <ListPost posts={posts} lang={lang} isRequest={requesting} />
          </CatWrapper>
        </MainSite>
        <RightSide lang={lang} type="category" id={match.params.catID} />
      </AppMain>
    </>
  );
}

Category.propTypes = {
  match: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  category: makeSelectCategory(),
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (lang, catID) => dispatch(getPostsAction(lang, catID)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Category);
