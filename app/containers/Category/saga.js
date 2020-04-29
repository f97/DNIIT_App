import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostByCatRequest } from '../../utils/request';
import { getPostsSuccess, getPostsError } from './actions';
import { GET_POSTS_ACTION } from './constants';

function* getPostsFlow({ lang, catID }) {
  try {
    const response = yield call(getPostByCatRequest, { lang, catID });
    if (response.networkStatus === 7) {
      yield put(getPostsSuccess(response.data.allPosts));
    } else {
      yield put(getPostsError(response));
    }
  } catch (errors) {
    yield put(getPostsError(errors));
  }
}

export default function* categorySaga() {
  yield takeLatest(GET_POSTS_ACTION, getPostsFlow);
}
