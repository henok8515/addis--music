import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMusics, createMusic, deleteMusic, updateMusic } from "../../api";
import { createMusicSlice, getMusicsSlice } from "../slice/musics";
import { GET_MUSICS, CREATE_MUSIC, DELETE_MUSIC, UPDATE_MUSIC } from "../types";

export function* getMusicsSaga() {
  const musics = yield call(getMusics);
  yield put(getMusicsSlice(musics.data));
}
export function* deleteMusicSaga(action) {
  yield call(deleteMusic, action.id);
}
export function* createMusicSaga(action) {
  const music = yield call(createMusic, action.music);
  yield put(createMusicSlice(music));
}
export function* updateMusicSaga(action) {
  yield updateMusic(action.music);
}
export function* watchMusicsSaga() {
  yield takeLatest(GET_MUSICS, getMusicsSaga);
  yield takeLatest(CREATE_MUSIC, createMusicSaga);
  yield takeEvery(DELETE_MUSIC, deleteMusicSaga);

  yield takeLatest(UPDATE_MUSIC, updateMusicSaga);
}
