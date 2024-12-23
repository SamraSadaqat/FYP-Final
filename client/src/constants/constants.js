/*eslint-disable*/
// import Apple from "assets/images/login/apple.svg";
// import Facebook from "assets/images/login/facebook.svg";
// import Google from "assets/images/login/gmail-icon.svg";

export const PUBLIC_ROUTES = {
  APP: "/",
  AUTH: "/auth",
};

export const GENDERS = ['Male' , 'Female'];

export const AUTH_ROUTES = {
  LOGIN: "/login",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  ADMIN: "admin",
};

export const AUTH_LINKS = {
  LOGIN: PUBLIC_ROUTES.AUTH + "/login",
  SIGN_UP: PUBLIC_ROUTES.AUTH + "/signup",
  FORGOT_PASSWORD: PUBLIC_ROUTES.AUTH + "/forgot-password",
};

export const HTTP_STATUS_CODES = {
  BAD_REQUEST_ERROR: 400,
  UNAUTHORIZED: 401,
  UNAUTHORIZED_MSG: "You are not authorized to access this page.",
  INTERNAL_ERROR: 500,
  INTERNAL_ERROR_MSG: "Sorry, something went wrong.",
  NOT_FOUND: 404,
  NOT_FOUND_MSG: "The page you visited does not exist.",
};

export const MODULES = {
  USER: "user",
  ADMIN: "admin",
  PUBLIC: "public",
};

export const REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  EXTRA_SPACE_SPECIAL_CHARACTERS:
    /^(?=.*[a-zA-Z])[a-zA-Z0-9]+(?:[\s]?[a-zA-Z0-9]+)*$/,
  TIME_FORMAT_24_HRS: `^([01][0-9]|2[0-3]):[0-5][0-9]$`,
  NUMBERS_ONLY: "^[0-9]*$",
  PASSWORD: "^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-z]).+$",
};

export const AUTH_MODULES = {
  SIGN_UP: "Sign up",
  LOGIN: "Login",
  LOGIN_ACCOUNT: "Login account",
  CANT_LOGIN: "Can't log in?",
  SIGNUP_ACCOUNT: "Sign up for an account",
  FORGOT_PASSWORD: "Forgot password",
  SEND: "SEND",
};
export const SOCIAL_SIGNUPS = [
  // {
  //   title: "Continue with Google",
  //   img: Google,
  //   altImgTitle: "Google",
  // },
  // {
  //   title: "Continue with Facebook",
  //   img: Facebook,
  //   altImgTitle: "Facebook",
  // },
  // {
  //   title: "Continue with Apple",
  //   img: Apple,
  //   altImgTitle: "Apple",
  // },
];

export const LOCAL_STORAGE_KEYS = {
  ROLE: "role",
  USER_NAME: "userName",
};
