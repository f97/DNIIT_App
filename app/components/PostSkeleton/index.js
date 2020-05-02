/**
 *
 * PostSkeleton
 *
 */

import React, { memo } from 'react';
import { Classes } from '@blueprintjs/core';
import PropTypes from 'prop-types';
import { PostWrapper, Thumbnail, Title, Sumary, Content } from './styled';

function PostSkeleton(props) {
  return (
    <>
      {Array.from(Array(props.numberPost).keys()).map(() => (
        <PostWrapper>
          <Thumbnail className={Classes.SKELETON}></Thumbnail>
          <Content>
            <Title className={Classes.SKELETON}>
              Đại học Đà Nẵng nghiên cứu công nghệ kiểm thử độc tố trong thực
              phẩm
            </Title>
            <Sumary className={Classes.SKELETON}>
              Ngày 14/11, Viện Công nghệ quốc tế - ĐH Đà Nẵng (DNIIT) công bố dự
              án “Toxin-Checker” - nhằm mục tiêu nghiên cứu ứng dụng công nghệ
              kiểm tra nhanh độc tố, giúp kiểm soát chất lượng an toàn thực
              phẩm.
            </Sumary>
          </Content>
        </PostWrapper>
      ))}
    </>
  );
}

PostSkeleton.propTypes = {
  numberPost: PropTypes.number,
};

export default memo(PostSkeleton);
