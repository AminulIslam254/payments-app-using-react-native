import { legacy_createStore } from "redux";
import  reducers  from './reducers/Index.js';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

const store = legacy_createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let newStore =legacy_createStore(persistedReducer)
let persistor = persistStore(newStore)

export  {newStore,persistor};