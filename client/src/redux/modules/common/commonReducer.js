import loggedInUser from "./slices/loginSlice";
import notifications from "./slices/notificationsSlice";


const CommonReducer = {
  notifications,
  loggedInUser,
};

export default CommonReducer;
