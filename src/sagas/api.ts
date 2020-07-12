import axios from "axios";

export const getSecretWordApi = async () => {
  try {
    return axios.get("http://localhost:3030");
  } catch (error) {
    throw new Error(error);
  }
};
