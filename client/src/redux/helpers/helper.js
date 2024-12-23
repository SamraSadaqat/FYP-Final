import dayjs from 'dayjs';
import jwtDecode from "jwt-decode";

import { TOKEN } from "../constants/constants";





//get initials from a name
export const getInitials = (name) => {
  if (name) {
    const fullName = name.split(" ");
    if (fullName.length <= 2) {
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }
    if (fullName.length > 2) {
      const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      return initials.toUpperCase();
    }
  }
};

//get allowed roles
export const isRoleAllowed = (module, ...role) => {
  let token = jwtDecode(localStorage.getItem(TOKEN.ACCESS));
  if (token && token.roles?.length > 0 && role) {
    let selectedModule = token.roles.find((item) => item.module == module);
    if (selectedModule)
      return selectedModule.roles.some((r) => role.indexOf(r) >= 0);
    else return false;
  } else {
    return false;
  }
};

//check if object is empty
export const isEmptyObject = (obj) => {
  let isEmpty = !Object.values(obj).some((x) => x === null || x === "");
  return isEmpty;
};

export const getRequiredProperty = (value, array, param, required) => {
  let result;
  if (array?.length > 0) {
    result = array?.find((item) => item[param] === value);
    if (result) return result[required];
  }
};

export const isAccessibleRoute = (route, permissions) => {
   const isAvailable = permissions.findIndex(permission => permission.screenName === route);
   return isAvailable != -1;
};


export const getFormattedDT = (date, format) => {
  return dayjs(date).format(format);
};

export const getDateTimeWithOutUtc = (date) => {
  date = dayjs(date).toDate();
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();
};