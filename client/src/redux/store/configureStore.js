import logger from "redux-logger";
import {
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  configureStore
} from "@reduxjs/toolkit";

import {
  ENV_CONSTANTS
} from "../constants/constants";

import api from "./middleware/api";
import {
  rootReducer
} from "./reducer";


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = () => {
  const isDevelopment = process.env.NODE_ENV === ENV_CONSTANTS.DEV;
  const middlewares = (getDefaultMiddleware) => {
    if (isDevelopment) return getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger).concat(api);
    else return getDefaultMiddleware({
      serializableCheck: false
    }).concat(api);
  };

  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => middlewares(getDefaultMiddleware),
    devTools: isDevelopment,
  });
};

export const Store = store();
export const persister = persistStore(Store);
export default Store;