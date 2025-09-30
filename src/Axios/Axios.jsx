import axios from "axios";
const API = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
export const DataView = () => {
  return API.get("products");
};
