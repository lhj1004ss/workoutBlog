import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'
import { createLogger } from 'redux-logger'


const configureStore = () => {
  const enhancer = process.env.NODE_NEV === 'production' ? compose(applyMiddleware([]), createLogger()) :
    composeWithDevTools(applyMiddleware([]), createLogger())
  console.log('hello', enhancer)

  const store = createStore(reducer);
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper