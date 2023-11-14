import { all, takeLatest, put, fork, delay } from "redux-saga/effects";
import axios from 'axios';
import { actionTypes } from "../constants/action";

function loginAPI(data) {
  return axios.post('/api/login', data)
}

function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(2000)
    yield put({
      type: actionTypes.LOG_IN_SUCCESS,
      data: action.data,
    })
  } catch (err) {
    console.log('err', err)
    yield put({
      type: actionTypes.LOG_IN_FAILURE,
      // data: err.response.data,
      error: err.response,

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
      type: actionTypes.LOG_OUT_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: actionTypes.LOG_OUT_FAILURE,
      error: err.response.data,
    })
  }
}

function signupAPI() {
  return axios.post('/api/signup')
}

function* signup() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(2000)

    yield put({
      type: actionTypes.SIGN_UP_SUCCESS,
    })
  } catch (err) {
    yield put({
      type: actionTypes.SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLogin() {
  yield takeLatest(actionTypes.LOG_IN_REQUEST, login)
}
function* watchLogout() {
  yield takeLatest(actionTypes.LOG_OUT_REQUEST, logout)
}
function* watchSignup() {
  yield takeLatest(actionTypes.SIGN_UP_REQUEST, signup)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
  ])
}