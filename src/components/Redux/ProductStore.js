import { createStore } from 'redux';
import reducers from './Reducers/index';
// import { configureStore } from '@reduxjs/toolkit'
// const prodStore = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//2nd param is the state

// export default prodStore;
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    reducers: reducers,
  },
});
export default store;