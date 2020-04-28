/**
 *
 * Post
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPost from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getPostAction } from './actions';
import { PostWrapper, PostHeader, PostContent } from './styled';

export function Post(props) {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });
  
  const { getPost, match, post:postProp } = props;
  const {post} = postProp;

  useEffect(() => {
    getPost(match.params.lang, match.params.postID);
  }, []);

  return (
    <>
    {post && 
      <PostWrapper>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.title}/>
        </Helmet>
        <PostHeader>
          <h2>{post.title}</h2>
          <p>{post.updatedAt}</p>
        </PostHeader>
        <PostContent>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
          }}></div>
        </PostContent>
      </PostWrapper>
    }
    </>
  );
}

Post.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (lang, id) => dispatch(getPostAction(lang,id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Post);
