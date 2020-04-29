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
import { FacebookProvider, Comments } from 'react-facebook';
import { Spinner, Intent } from '@blueprintjs/core';
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
} from './styled';

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
        <PostWrapper>
          <Helmet>
            <title>{post.title}</title>
            <meta name="description" content={post.title} />
          </Helmet>
          {requesting ? (
            <Spinner intent={Intent.PRIMARY} />
          ) : (
            <>
              <PostHeader>
                <PostTitle>{post.title}</PostTitle>
                <p>{post.updatedAt}</p>
              </PostHeader>
              <PostContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                ></div>
              </PostContent>
              <PostComment>
                <FacebookProvider appId="365103820781953">
                  <Comments href={window.location.href} width="100%" />
                </FacebookProvider>
              </PostComment>
            </>
          )}
        </PostWrapper>
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
