import { put, call, takeLatest } from 'redux-saga/effects';
import { SET_POSTS, REQUEST_NEW_POSTS } from './types';
import { showLoader, hideLoader, showAlert } from './actions';

const KEY_API = '6ef73281904bd40e1c6ce67fc2c4e3d6'

export function* sagaWatcher() {
  yield takeLatest(REQUEST_NEW_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: SET_POSTS, payload })
    yield put(hideLoader());
  } catch (e) {
    //yield put(showAlert('error'));
    yield put(hideLoader());
  }

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
  const result = await response.json();
  console.log(result);
  return result;
  }
}