/**
 *
 * ListPost
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListWrapper,
  Thumbnail,
  PostWrapper,
  Content,
  Title,
  Sumary,
} from './styled';
import Pagination from '../Pagination';
import { Link } from 'react-router-dom';

function ListPost({ posts, lang }) {
  const [page, setPage] = useState(1);
  return (
    <ListWrapper>
      {posts.slice((page - 1) * 2, (page - 1) * 2 + 2).map(post => (
        <PostWrapper>
          {post.thumbnail &&  
            <Link to={`/${lang}/${post.id}`}>
              <Thumbnail>
                <img
                  alt={post.title}
                  src={post.thumbnail}
                  width="140"
                  className="img-thumbnail pull-left imghome fix-vcpage-img"
                />
              </Thumbnail>
            </Link>
          }
          <Content>
            <Link to={`/${lang}/${post.id}`}><Title>{post.title}</Title></Link>
            <Sumary>
              {post.excerpt}
            </Sumary>
          </Content>
        </PostWrapper>
      ))}
        <Pagination page={page} totalPages={Math.ceil(posts.length / 2)} onChangePage={(p)=> {
          setPage(p)
        }}/>
    </ListWrapper>
  );
}

ListPost.propTypes = {
  posts: PropTypes.array,
  lang: PropTypes.string,
};

export default memo(ListPost);
