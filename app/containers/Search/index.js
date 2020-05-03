/**
 *
 * Search
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
import makeSelectSearch from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPostsAction } from './actions';
import ListPost from '../../components/ListPost';
import { SearchWrapper, SearchHeader, SearchNoti } from './styled';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { AppMain, MainSite } from '../App/styled';
import RightSide from '../../components/RightSide';

export function Search(props) {
  useInjectReducer({ key: 'search', reducer });
  useInjectSaga({ key: 'search', saga });
  const { match, getPosts, search } = props;
  const { posts, lang, requesting } = search;

  useEffect(() => {
    getPosts(match.params.lang, match.params.key);
  }, [match.params.key]);

  return (
    <>
      <Header />
      <Nav />
      <AppMain>
        <MainSite>
          <Helmet>
            <title>Search</title>
            <meta name="description" content="Description of Search" />
          </Helmet>
          <SearchWrapper>
            <SearchHeader>
              Kết quả tìm kiếm bởi từ khoá <span>{match.params.key}</span>
            </SearchHeader>
            {!requesting && posts.length !== 0 && (
              <ListPost posts={posts} lang={lang} />
            )}

            {!requesting && posts.length === 0 && (
              <SearchNoti>Không có kết quả nào cho tìm kiếm</SearchNoti>
            )}
          </SearchWrapper>
        </MainSite>
        <RightSide />
      </AppMain>
    </>
  );
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  search: makeSelectSearch(),
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (lang, catID) => dispatch(getPostsAction(lang, catID)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Search);
