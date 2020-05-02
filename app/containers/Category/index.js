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
import reducer from './reducer';
import saga from './saga';
import ListPost from '../../components/ListPost';
import { getPostsAction } from './actions';
import makeSelectCategory from './selectors';
import { CatWrapper, Categories } from './styled';
import { capitalize } from '../../../helpers/data.hepler';

export function Category(props) {
  useInjectReducer({ key: 'category', reducer });
  useInjectSaga({ key: 'category', saga });

  const { getPosts, match, category } = props;
  const { posts, cat, lang, requesting } = category;

  useEffect(() => {
    getPosts(match.params.lang, match.params.catID);
  }, []);

  return (
    <div>
      {!requesting && (
        <>
          <Helmet>
            <title>{cat.name}</title>
            <meta name="description" content={cat.name} />
          </Helmet>
          <CatWrapper>
            <Categories>
              <Link to={`/${lang}/`}>Trang Chủ</Link>
              <Link to={`/${lang}/cat/${cat.id}`}>{cat.name}</Link>
            </Categories>
            {posts.length !== 0 && <ListPost posts={posts} lang={lang} />}
          </CatWrapper>
        </>
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
