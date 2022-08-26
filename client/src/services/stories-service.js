import axios from "axios";
import authHeader from "./auth-header";
import authService from "./auth-service";

// const API_URL = "http://localhost:5000/api/stories";
const API_URL = "https://tripperapi.azurewebsites.net/api/stories";
const logged = authService.getCurrentUser();

const getAllStories = () => {
  return axios.get(API_URL + "/all");
};

const getUserStories = () => {
  return axios.get(API_URL + "/user", { userName: logged.user });
};

const createStory = (target, title, content) => {
  return axios.post(
    API_URL,
    { target, title, content, postedBy: logged.user },
    { headers: authHeader() }
  );
};

const updateStory = (id, target, title, content) => {
  return axios.patch(
    API_URL + "/" + id,

    {
      target,
      title,
      content,
    }
  );
};

const deleteStory = (id) => {
  return axios
    .delete(API_URL + "/" + id, { headers: authHeader() })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const storiesService = {
  getAllStories,
  getUserStories,
  createStory,
  updateStory,
  deleteStory,
};

export default storiesService;
