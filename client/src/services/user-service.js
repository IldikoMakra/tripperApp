import axios from "axios";
import authHeader from "./auth-header";
import authUserID from "./auth-userID";

//const API_URL = "http://localhost:5000/api/users";
const API_URL = "https://tripperapi.azurewebsites.net/api/users";

const getAllUsers = () => {
  return axios.get(API_URL);
};

const updateUser = () => {
  return axios.patch(API_URL + "/update/" + authUserID, {
    headers: authHeader,
  });
};

const usersService = {
  getAllUsers,
  updateUser,
};

export default usersService;
