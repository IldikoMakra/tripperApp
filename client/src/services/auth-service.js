import axios from "axios";

const API_URL = "https://tripper.azurewebsites.net/api/users";
const API_URL_2 = "http://localhost:5000/api/users";

const signup = (userName, email, password) => {
  return axios
    .post(API_URL + "/signup", {
      userName,
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
