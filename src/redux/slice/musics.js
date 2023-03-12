import { createSlice, current } from "@reduxjs/toolkit";
const musics = createSlice({
  name: "musics",
  initialState: [],
  reducers: {
    getMusicsSlice: (state, action) => {
      try {
        state = action.payload;
        return state;
      } catch (error) {
        console.error(error, "Error getting musics");
      }
    },
    createMusicSlice: (state, action) => {
      try {
        state.push(action.payload);
        return state;
      } catch (error) {
        console.log(error, "Error creating state");
      }
    },
    deleteMusicSlice: (state, action) => {
      try {
        const newState = current(state);
        let deletedState = newState.filter((i) => i._id !== action.payload);

        return deletedState;
      } catch (error) {
        console.log(error, "Error deleting state");
      }
    },
    editMusicSlice: (state, action) => {
      try {
        const newState = current(state);
        const updatedState = newState.map((i) =>
          i._id === action.payload.id ? action.payload : i
        );
        return updatedState;
      } catch (error) {
        console.log(error, "Error updating state");
      }
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
