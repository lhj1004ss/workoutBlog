import { all, takeLatest, put, fork } from "redux-saga/effects";
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
      data: result.data,
    })
  } catch (err) {
    yield put({
      type: actionTypes.ADD_POST_FAILURE,
      error: err.response.data,
    })
  }
}

//  takeEvery instead take becasue take event listener only occurs once
//  takeLatest only happens the last event when user accidently clicks twice

function* watchAddPost() {
  yield takeLatest(actionTypes.ADD_POST_REQUEST, addPost)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost)
  ])
}