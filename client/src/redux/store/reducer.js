import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { adminRootReducer, commonRootReducer } from "./entities";
const commonPersistConfig = {
  key: "common",
  storage,
  // blacklist: ['isLoggedIn']
  // whitelist: ['users']
};
const adminPersistConfig = {
  key: "admin",
  storage,
  blacklist: ["courts", "users", "meta", "roles"],
  // whitelist: ['users']
};
export const rootReducer = combineReducers({
  common: persistReducer(commonPersistConfig, commonRootReducer),
  admin: persistReducer(adminPersistConfig, adminRootReducer),
});
