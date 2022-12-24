import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import userReducer from './userAuth';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store=configureStore({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store)
