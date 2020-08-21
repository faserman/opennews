import { put, call, takeLatest } from 'redux-saga/effects';
import { SET_POSTS, REQUEST_NEW_POSTS, SET_LOADED } from './types';
import { showLoader, hideLoader } from './actions';

const KEY_API = '6ef73281904bd40e1c6ce67fc2c4e3d6'

export function* sagaWatcher() {
  yield takeLatest(REQUEST_NEW_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const data = yield call(fetchPosts);
    yield put({ type: SET_POSTS, payload: data.results });
    yield put({ type: SET_LOADED });
    yield put(hideLoader());
  } catch (e) {
    //yield put(showAlert('error'));
    yield put(hideLoader());
  }

async function fetchPosts() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_API}&language=en-US&page=1`
    );
  const result = await response.json();
  console.log(result.results);
  return result;
  }
}