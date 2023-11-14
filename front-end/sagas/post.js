import { all, takeLatest, put, fork, delay } from "redux-saga/effects";
import axios from 'axios';
import { actionTypes } from '../constants/action'

function addPostAPI(data) {
  return axios.post('/api/post', data)
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(2000)
    yield put({
      type: actionTypes.ADD_POST_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: actionTypes.ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function addCommentAPI(data) {
  return axios.post('/api/comment', data)
}

function* addComment(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(2000)
    yield put({
      type: actionTypes.ADD_COMMENT_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    yield put({
      type: actionTypes.ADD_COMMENT_FAILURE,
      error: err.response.data,
    })
  }
}

//  takeEvery instead take becasue take event listener only occurs once
//  takeLatest only happens the last event when user accidently clicks twice

function* watchAddPost() {
  yield takeLatest(actionTypes.ADD_POST_REQUEST, addPost)
}

function* watchAddComment() {
  yield takeLatest(actionTypes.ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment)
  ])
}