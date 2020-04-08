import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostsRequest } from '../../utils/request';
import { getPostsSuccess, getPostsError } from './actions';
import { GET_POSTS_ACTION } from './constants';

function* getPostsFlow({ lang }) {
  try {
    const response = yield call(getPostsRequest, { lang });
    if (response.networkStatus === 7) {
      yield put(getPostsSuccess(response.data.allPosts));
    } else {
      yield put(getPostsError(response));
    }
  } catch (errors) {
    yield put(getPostsError(errors));
  }
}

export default function* homePageSaga() {
  yield takeLatest(GET_POSTS_ACTION, getPostsFlow);
}
