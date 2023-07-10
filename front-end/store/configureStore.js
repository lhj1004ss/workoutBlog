import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore, compose, applyMiddleware, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'


const configureStore = () => {
  const middleware = []
  const enhancer = process.env.NODE_NEV === 'production' ? compose(applyMiddleware(...middleware)) :
    composeWithDevTools(applyMiddleware(...middleware))

  const store = createStore(reducer, enhancer);
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper