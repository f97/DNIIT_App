/**
 *
 * Page
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPageAction } from './actions';
import { PageWrapper, PageHeader, PageContent, PageTitle } from './styled';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { AppMain, MainSite } from '../App/styled';
import RightSide from '../../components/RightSide';

export function Page(props) {
  useInjectReducer({ key: 'page', reducer });
  useInjectSaga({ key: 'page', saga });

  const { getPage, match, page: pageProps } = props;
  const { page } = pageProps;
  useEffect(() => {
    getPage(match.params.lang, match.params.pageID);
  }, []);

  return (
    <>
      {page && (
        <>
          <Header />
          <Nav />
          <AppMain>
            <MainSite>
              <PageWrapper>
                <Helmet>
                  <title>{page.title}</title>
                  <meta name="description" content={page.title} />
                </Helmet>
                <PageHeader>
                  <PageTitle>{page.title}</PageTitle>
                  <p>Ngày Cập Nhật: {page.updatedAt}</p>
                </PageHeader>
                <PageContent>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: page.content,
                    }}
                  ></div>
                </PageContent>
              </PageWrapper>
            </MainSite>
            <RightSide />
          </AppMain>
        </>
      )}
    </>
  );
}

Page.propTypes = {
  page: PropTypes.object,
  match: PropTypes.object,
  getPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
});

const mapDispatchToProps = (dispatch) => ({
  getPage: (lang, id) => dispatch(getPageAction(lang, id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Page);
