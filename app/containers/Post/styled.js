import styled from 'styled-components';
import { H2 } from '@blueprintjs/core';

export const PostWrapper = styled.div`
  background: #ffffff;
  /* min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column; */
  .bp3-spinner {
    padding: 200px;
  }
`;

export const PostHeader = styled.div`
  color: #444;
`;

export const PostContent = styled.div`
  background: #999;
  color: #444;
`;

export const PostComment = styled.div``;

export const PostTitle = styled(H2)`
  color: #444 !important;
`;
