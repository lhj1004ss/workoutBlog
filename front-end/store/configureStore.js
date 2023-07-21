import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'
import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const enhancer = process.env.NODE_NEV === 'production' ? compose(applyMiddleware(...middleware)) :
    composeWithDevTools(applyMiddleware(...middleware))

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper