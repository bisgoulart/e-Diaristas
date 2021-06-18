import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Contend-Type": "aplication/json",
  },
});
