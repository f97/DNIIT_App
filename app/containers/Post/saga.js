import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostRequest } from '../../utils/request';
import { getPostSuccess, getPostError } from './actions';
import { GET_POST_ACTION } from './constants';

function* getPostFlow({ lang, id }) {
  try {
    const response = yield call(getPostRequest, { lang, id });
    if (response.networkStatus === 7) {
      yield put(getPostSuccess(response.data.Post));
    } else {
      yield put(getPostSuccess(response));
    }
  } catch (errors) {
    yield put(getPostError(errors));
  }
}

export default function* postSaga() {
  yield takeLatest(GET_POST_ACTION, getPostFlow);
}
