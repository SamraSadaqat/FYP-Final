import { logoutCall } from "./authService";

export const Auth = {
  getAuth() {
    if (localStorage.getItem("accessToken")) {
      return true;
    } else {
      return false;
    }
  },
  isAdmin(){
    const role = localStorage.getItem("ROLE");
    return role == 1;
  }
};


export function logout() {
  logoutCall();
  localStorage.clear();
}