import { all, takeLatest, put, fork, delay } from "redux-saga/effects";
import axios from 'axios';

function loginAPI(data) {
  return axios.post('/api/login', data)
}

function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(2000)
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    })
  } catch (err) {
    console.log('err', err)
    yield put({
      type: 'LOG_IN_FAILURE',
      // data: err.response.data,
      data: err.response,

    })
  }
}
function logoutAPI() {
  return axios.post('/api/logout')
}

function* logout() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(2000)

    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    })
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    })
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", login)
}
function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logout)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ])
}