import styled from 'styled-components';

export const PostWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  background: #fff;
  width: 100%;
  padding-left: 10px;
`;

export const Thumbnail = styled.div`
  width: 400px;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
  margin: 0 10px 0 0;
`;

export const Content = styled.div``;

export const Title = styled.div`
  margin-bottom: 7px;
  color: #880000;
  font-weight: bold;
  font-size: 16px;
`;

export const Sumary = styled.div`
  color: #444;
  line-height: 1.6;
`;
