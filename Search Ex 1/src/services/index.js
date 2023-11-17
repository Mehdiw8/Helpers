import axios from "axios";
const Url = "http://localhost:9000/recipes";

export const getAllData = () => {
  return axios.get(Url);
};

export const createNewRecipe = (newRecipe) =>{
  return axios.post(Url,newRecipe)
}
export const getAllDataByQuery = (query) => {
  return axios.get(Url+query);
};