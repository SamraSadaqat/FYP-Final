import { combineReducers } from "redux";

import adminReducer from "../modules/admin/adminReducer";
import commonReducer from "../modules/common/commonReducer";

const commonReducers = {
  ...commonReducer,
};

const adminReducers = {
  ...adminReducer,
};

export const commonRootReducer = combineReducers({
  ...commonReducers,
});

export const adminRootReducer = combineReducers({
  ...adminReducers,
});
