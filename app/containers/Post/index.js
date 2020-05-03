/**
 *
 * Post
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
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { Spinner, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import makeSelectPost from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPostAction } from './actions';
import {
  PostWrapper,
  PostHeader,
  PostContent,
  PostComment,
  PostTitle,
  Categories,
  PostExcerpt,
  Share,
} from './styled';
import { capitalize } from '../../../helpers/data.hepler';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { AppMain, MainSite } from '../App/styled';
import RightSide from '../../components/RightSide';

export function Post(props) {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });

  const { getPost, match, post: postProp } = props;
  const { post, requesting } = postProp;

  useEffect(() => {
    getPost(match.params.lang, match.params.postID);
  }, []);

  return (
    <>
      {post && (
        <>
          <Header />
          <Nav />
          <AppMain>
            <MainSite>
              <PostWrapper>
                <Helmet>
                  <title>{post.title}</title>
                  <meta name="description" content={post.title} />
                </Helmet>
                {requesting ? (
                  <Spinner intent={Intent.PRIMARY} />
                ) : (
                  <>
                    <Categories>
                      <Link to={`/${match.params.lang}/`}>Trang Chủ</Link>
                      {post.category.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/${match.params.lang}/cat/${cat.id}`}
                        >
                          {cat[`name${capitalize(match.params.lang)}`]}
                        </Link>
                      ))}
                    </Categories>
                    <PostHeader>
                      <PostTitle>{post.title}</PostTitle>
                      <p>Ngày Cập Nhật: {post.updatedAt}</p>
                    </PostHeader>
                    <PostContent>
                      <PostExcerpt>{post.excerpt}</PostExcerpt>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content,
                        }}
                      ></div>
                    </PostContent>
                    <Share>
                      <FacebookProvider appId="365103820781953">
                        <ShareButton href={window.location.href}>
                          Facebook Share
                        </ShareButton>
                      </FacebookProvider>
                    </Share>
                    <PostComment>
                      <FacebookProvider appId="365103820781953">
                        <Comments href={window.location.href} width="100%" />
                      </FacebookProvider>
                    </PostComment>
                  </>
                )}
              </PostWrapper>
            </MainSite>
            <RightSide />
          </AppMain>
        </>
      )}
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  match: PropTypes.object,
  getPost: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (lang, id) => dispatch(getPostAction(lang, id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Post);
