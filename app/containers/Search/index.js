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
import reducer from './reducer';
import saga from './saga';
// import HomeSlide from '../../components/HomeSlide';
// import HomeWidget from '../../components/HomeWidget';
import ListPost from '../../components/ListPost';
import { HomeWrapper, HomeContent } from './styled';
import { getPostsAction } from './actions';
import makeSelectCategory from './selectors';

export function Category(props) {
  useInjectReducer({ key: 'category', reducer });
  useInjectSaga({ key: 'category', saga });

  const { getPosts, match, category } = props;
  const { posts } = category;
  console.log('Category -> posts', posts);

  useEffect(() => {
    getPosts(match.params.lang, match.params.catID);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Category</title>
        <meta name="description" content="Description of Category" />
      </Helmet>
      {posts.length !== 0 && (
        <ListPost posts={posts} lang={match.params.lang} />
      )}
    </div>
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
