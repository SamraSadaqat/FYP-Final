export const BaseURL = {
  BACKEND_SERVICE: process.env.REACT_APP_BACKEND_WEB_SERVICE,
};

export const AppHeaders = {
  CONTENT_HEADERS: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  IMAGE_HEADERS: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};

export const ENV_CONSTANTS = {
  DEV: "development",
  PROD: "prod",
  STAGING: "uat",
  QA: "qa",
};

export const HTTP_ACTIONS = {
  DELETE: "delete",
  POST: "post",
  UPDATE: "update",
  PUT: "put",
  GET: "get",
};

export const HTTP_STATUSCODES = {
  UNAUTHORISED: 401,
};

export const TOKEN = {
  ACCESS: "accessToken",
  REFRESH: "refreshToken",
};

export const DAYS_LIST = [
  {
    id: 1,
    name: "Monday",
  },
  {
    id: 2,
    name: "Tuesday",
  },
  {
    id: 3,
    name: "Wednesday",
  },
  {
    id: 4,
    name: "Thursday",
  },
  {
    id: 5,
    name: "Friday",
  },
  {
    id: 6,
    name: "Saturday",
  },
  {
    id: 0,
    name: "Sunday",
  },
];

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const BOOKING_STATUS = [
  { title: "Pending", color: "#FFD570", fontColor: "white" },
  { title: "Confirmed", color: "green", fontColor: "white" },
  { title: "Rejected", color: "red", fontColor: "white" },
];
