import { createSlice } from "@reduxjs/toolkit";
const musics = createSlice({
  name: "musics",
  initialState: [],
  reducers: {
    getMusicsSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    createMusicSlice: (state) => {
      return state;
    },
    deleteMusicSlice: (state) => {
      return state;
    },
    editMusicSlice: (state) => {
      return state;
    },
  },
});

export const {
  getMusicsSlice,
  createMusicSlice,
  deleteMusicSlice,
  editMusicSlice,
} = musics.actions;

export default musics.reducer;
