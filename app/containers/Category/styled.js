import styled from 'styled-components';

export const CatWrapper = styled.div``;

export const catHeader = styled.div`
  display: flex;
`;
export const CatContent = styled.div`
  display: flex;
  padding: 10px;
  background: #ffffff;
`;

export const Categories = styled.div`
  padding: 8px 15px;
  margin-bottom: 18px;
  list-style: none;
  background-color: #f5f5f5;
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
