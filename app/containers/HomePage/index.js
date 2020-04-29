/**
 *
 * HomePage
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
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import HomeSlide from '../../components/HomeSlide';
// import HomeWidget from '../../components/HomeWidget';
import ListPost from '../../components/ListPost';
import { HomeWrapper, HomeContent } from './styled';
import { getPostsAction } from './actions';

const HomePage = (props) => {
  const { getPosts, match, homePage } = props;
  const { posts, requesting } = homePage;
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    getPosts(match.params.lang);
  }, [match.params.lang]);

  return (
    <HomeWrapper>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      {/* <HomeHeader>
        <HomeSlide />
        <HomeWidget />
      </HomeHeader> */}
      <HomeContent>
        <ListPost
          posts={posts}
          lang={match.params.lang}
          isRequest={requesting}
        />
      </HomeContent>
    </HomeWrapper>
  );
};

HomePage.propTypes = {
  match: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  homePage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (lang) => dispatch(getPostsAction(lang)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
