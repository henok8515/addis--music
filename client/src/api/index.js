import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const getMusicAPI = async () => axios.get("/");

export const createMusicAPI = async (music) => axios.post(`/users`, music);

export const updateMusicAPI = async (data) =>
  axios.post("http://localhost:5000/update", data);

export const deleteMusicByIdAPI = async (id) => {
  console.log(id, "api id");
  return axios.post("/delete", { id });
};
