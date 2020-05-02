import styled from 'styled-components';
import { H2 } from '@blueprintjs/core';

export const PageWrapper = styled.div`
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

export const PageHeader = styled.div`
  color: #800;
  border-bottom: 1px solid #800;
`;
export const PageContent = styled.div`
  color: #444;
  padding-top: 20px;
`;

export const PageTitle = styled(H2)`
  color: #800 !important;
`;
