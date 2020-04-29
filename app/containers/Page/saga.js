import { call, put, takeLatest } from 'redux-saga/effects';
import { getPageRequest } from '../../utils/request';
import { getPageSuccess, getPageError } from './actions';
import { GET_PAGE_ACTION } from './constants';

function* getPageFlow({ lang, id }) {
  try {
    const response = yield call(getPageRequest, { lang, id });
    console.log('function*getPageFlow -> response', response);
    if (response.networkStatus === 7) {
      yield put(getPageSuccess(response.data.Page));
    } else {
      yield put(getPageSuccess(response));
    }
  } catch (errors) {
    yield put(getPageError(errors));
  }
}

export default function* pageSaga() {
  yield takeLatest(GET_PAGE_ACTION, getPageFlow);
}
