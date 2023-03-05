import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicSlice from "./features/music/musicSlice";
import musicSaga from "../src/redux/saga/musicSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    music: musicSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(musicSaga);
