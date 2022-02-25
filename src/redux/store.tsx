import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './sagas/_root.saga'; // imports ./redux/sagas/index.js


const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  // adds all middleware to our project including saga and logger
  middleware: middlewareList,
  devTools: process.env.NODE_ENV !== 'production'
});

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;