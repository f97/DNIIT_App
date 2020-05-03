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
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { AppMain, MainSite } from '../App/styled';
import RightSide from '../../components/RightSide';

const HomePage = (props) => {
  const { getPosts, match, homePage } = props;
  const { posts, requesting, lang } = homePage;
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    getPosts(match.params.lang);
  }, [match.params.lang]);

  return (
    <>
      <Header />
      <Nav lang={lang} />
      <AppMain>
        <MainSite>
          <HomeWrapper>
            <Helmet>
              <title>DNIIT</title>
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
        </MainSite>
        <RightSide />
      </AppMain>
    </>
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
