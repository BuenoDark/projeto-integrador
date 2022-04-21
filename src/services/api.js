import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-118-21-85.us-east-2.compute.amazonaws.com:8080/",
});

export default api;
