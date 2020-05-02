import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostBySearch } from '../../utils/request';
import { getPostsSuccess, getPostsError } from './actions';
import { GET_POSTS_ACTION } from './constants';

function* getPostsFlow({ lang, key }) {
  try {
    const response = yield call(getPostBySearch, { lang, key });
    if (response.networkStatus === 7) {
      yield put(getPostsSuccess(response.data.allPosts));
    } else {
      yield put(getPostsError(response));
    }
  } catch (errors) {
    yield put(getPostsError(errors));
  }
}

export default function* searchSaga() {
  yield takeLatest(GET_POSTS_ACTION, getPostsFlow);
}
