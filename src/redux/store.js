import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
// import reduxMiddle from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsynStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsynStorage,
  //storage, //oldstorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
  // applyMiddleware(reduxMiddle, logger),
);
const persistor = persistStore(store);
export {store, persistor};
