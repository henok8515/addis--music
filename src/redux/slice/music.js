import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    title: "",
    artist: "",
    album: "",
    genre: "",
  },
  reducers: {
    setMusicSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setMusicSlice } = musicSlice.actions;
export default musicSlice.reducer;
