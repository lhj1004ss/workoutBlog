import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux'

import reducer from '../reducers'
const configureStore = () => {
  const store = createStore(reducer, enhancer);
  return store
}

const wrapper = createWrapper(configureStroe, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper