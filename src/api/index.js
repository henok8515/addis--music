import axios from "axios";

axios.defaults.baseURL = "https://addis-music.onrender.com";
// axios.defaults.baseURL = "http://localhost:5000";

export const getMusics = async () => axios.get("/");
console.log(getMusics());
export const deleteMusic = async (id) =>
  axios.post(`/delete`, {
    id,
  });
export const createMusic = async (music) => {
  axios.post("/create", music);
};
export const updateMusic = async (id, music) =>
  axios.post("/update", id, music);
