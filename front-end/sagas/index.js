import { all, fork, take } from 'redux-saga/effects';

function* watchLogin() {
  yield take("LOG_IN")
}
function* watchLogOut() {
  yield take("LOG_OUT")
}

function* watchAddPost() {
  yield take("ADD_POST")
}

export default function* rootSaga() {

  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchAddPost),

  ])
}