import { call, put, takeEvery } from "redux-saga/effects";
import { getMusicSuccess } from "./features/music/musicSlice";
function* getFetchedMusic() {
  const music = yield call(() => fetch("https://addis-music.onrender.com"));
  const formattedData = yield music.json();
  console.log(formattedData);
  yield put(getMusicSuccess(formattedData));
  //   console.log(formattedData, "formattedData");
}
function* deleteMusic(action) {
  console.log("running deleteMusic saga");
  try {
    const deletedMusic = yield call(
      "https://addis-music.onrender.com/delete",
      action.payload.id
    );
    yield put({ type: "delete", payload: deletedMusic });
    console.log(action.payload.id);
  } catch (error) {
    console.log(error);
  }
}

function* musicSaga() {
  yield takeEvery("music/getMusicFetch", getFetchedMusic);
  yield takeEvery("delete", deleteMusic);
}
getFetchedMusic();
export default musicSaga;
