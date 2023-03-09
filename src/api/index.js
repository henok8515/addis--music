import axios from "axios";

axios.defaults.baseURL = "https://addis-music.onrender.com/";

export const getMusicAPI = async () => axios.get("/");

export const createMusicAPI = async (music) => axios.post(`/create`, music);

export const updateMusicAPI = async (data) => axios.post("/update", data);

export const deleteMusicByIdAPI = async (id) => {
  console.log(id, "api id");
  return axios.post("/delete", { id });
};
