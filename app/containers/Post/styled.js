import styled from 'styled-components';
import { H2 } from '@blueprintjs/core';

export const PostWrapper = styled.div`
  background: #ffffff;
  padding: 30px;
  .bp3-spinner {
    padding: 300px 0;
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
  color: #444;
  padding-top: 20px;
`;

export const PostComment = styled.div`
  iframe {
    width: 100% !important;
  }
`;

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
