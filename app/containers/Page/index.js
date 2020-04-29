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
import { PageWrapper, PageHeader, PageContent } from './styled';

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
        <PageWrapper>
          <Helmet>
            <title>{page.title}</title>
            <meta name="description" content={page.title} />
          </Helmet>
          <PageHeader>
            <h2>{page.title}</h2>
            <p>{page.updatedAt}</p>
          </PageHeader>
          <PageContent>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: page.content,
              }}
            ></div>
          </PageContent>
        </PageWrapper>
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
