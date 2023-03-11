import { all } from "redux-saga/effects";
import { watchMusicsSaga } from "./music";

export function* rootSaga() {
  yield all([watchMusicsSaga()]);
}
