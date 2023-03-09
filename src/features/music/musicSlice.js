import { createSlice } from "@reduxjs/toolkit";
export const musicSlice = createSlice({
  name: "music",
  initialState: {
    music: [],
  },
  reducers: {
    getMusicFetch: (state, action) => {},
    getMusicSuccess: (state, action) => {
      state.music = action.payload;
    },
    deleteMusicSlice: (state, action) => {
      console.log(action.payload, "id for deleting");
      let f = state.music.splice(action.payload, 1);
      console.log(f);
      return state;
    },
    editMusicSlice: (state, action) => {
      state = state.music.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return state;
    },
  },
});
export const {
  getMusicFetch,
  deleteMusicSlice,
  editMusicSlice,
  getMusicSuccess,
} = musicSlice.actions;
export default musicSlice.reducer;
