import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://thesis-freelanceapp.netlify.app/api/",
  withCredentials: true,
});

export default newRequest
