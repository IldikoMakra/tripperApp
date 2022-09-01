import axios from "axios";
import authHeader from "./auth-header";
import authUserName from "./auth-userName";
import authUserID from "./auth-userID";

const API_URL = "https://tripper.azurewebsites.net/api/users";
const API_URL_2 = "http://localhost:5000/api/users";

const getAllUsers = () => {
  return axios.get(API_URL);
};

const getCurrentUser = () => {
  return axios.get(API_URL + "/" + authUserID());
};

const updateUser = (formData) => {
  return axios({
    method: "patch",
    url: API_URL + "/" + authUserName(),
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const usersService = {
  getAllUsers,
  updateUser,
  getCurrentUser,
};

export default usersService;
