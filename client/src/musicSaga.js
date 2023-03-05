import { call, put, takeEvery } from "redux-saga/effects";
import { getMusicSuccess } from "./features/music/musicSlice";
function* getFetchedMusic() {
  const music = yield call(() => fetch("http://localhost:5000/"));
  const formattedData = yield music.json();
  yield put(getMusicSuccess(formattedData));
  //   console.log(formattedData, "formattedData");
}

function* musicSaga() {
  yield takeEvery("music/getMusicFetch", getFetchedMusic);
}
export default musicSaga;
