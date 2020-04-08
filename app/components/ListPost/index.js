/**
 *
 * ListPost
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  ListWrapper,
  Thumbnail,
  PostWrapper,
  Content,
  Title,
  Sumary,
} from './styled';
// import styled from 'styled-components';

function ListPost({ posts }) {
  console.log('Bug: ListPost -> posts', posts);
  return (
    <ListWrapper>
      {posts.map((post) => (
        <PostWrapper>
          <Thumbnail>
            <img
              alt={post.title}
              src="http://ifi.vnu.edu.vn/files/news/2020_04/illustration_3.jpg"
              width="140"
              className="img-thumbnail pull-left imghome fix-vcpage-img"
            ></img>
          </Thumbnail>
          <Content>
            <Title>{post.title}</Title>
            <Sumary>
              Tính đến ngày 6 tháng 4, Bộ Y tế đã xác nhận tổng cộng 241 trường
              hợp mắc COVID-19. Việt Nam vẫn đang kiểm soát tốt dịch bệnh với 91
              người nhiễm bệnh đã được chữa khỏi, 150 người đang điều trị và
              không có trường hợp tử vong nào.
            </Sumary>
          </Content>
        </PostWrapper>
      ))}
    </ListWrapper>
  );
}

ListPost.propTypes = {
  posts: PropTypes.array,
};

export default memo(ListPost);
