import styled from 'styled-components';
import { H2 } from '@blueprintjs/core';

export const PostWrapper = styled.div`
  background: #ffffff;
  padding: 30px;
  /* min-height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column; */
  .bp3-spinner {
    padding: 200px;
  }
  img {
    width: 100% !important;
    height: auto !important;
  }
`;

export const PostHeader = styled.div`
  color: #800;
  border-bottom: 1px solid #800;
`;

export const PostContent = styled.div`
  margin-top: 20px;
  background: #fff;
  color: #444;
`;

export const PostComment = styled.div``;

export const PostTitle = styled(H2)`
  color: #800 !important;
`;

export const Categories = styled.div`
  padding: 8px 15px;
  margin-bottom: 18px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  a {
    color: #0742b2;
    text-decoration: none;
    font-weight: bold;
  }
  a + a:before {
    content: '/';
    padding: 0 5px;
    color: #800;
  }
`;

export const PostExcerpt = styled.p`
  font-weight: bold;
`;
export const Share = styled.div``;
