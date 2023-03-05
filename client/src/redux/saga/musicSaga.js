import { call, put, takeEvery } from "redux-saga/effects";
import { deleteMusicByIdAPI, updateMusicAPI } from "../../api";
import {
  getMusicSuccess,
  deleteMusicSlice,
  editMusicSlice,
} from "../../features/music/musicSlice";
import { DELETE_MUSIC, GET_MUSIC, UPDATE_MUSIC } from "../../types";
function* getFetchedMusic() {
  const music = yield call(() => fetch("http://localhost:5000/"));
  const formattedData = yield music.json();
  yield put(getMusicSuccess(formattedData));
}
export function* deleteUserByIdSaga(action) {
  yield deleteMusicByIdAPI(action.id);
  yield put(deleteMusicSlice(action.id));
}
export function* updateMusic(action) {
  yield updateMusicAPI(action.updatedMusic);
  yield put(editMusicSlice(action.updatedMusic));
}
function* musicSaga() {
  yield takeEvery("music/getMusicFetch", getFetchedMusic);
  yield takeEvery(GET_MUSIC, getFetchedMusic);
  yield takeEvery(DELETE_MUSIC, deleteMusicByIdAPI);
  yield takeEvery(UPDATE_MUSIC, updateMusic);
}
export default musicSaga;
