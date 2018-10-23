/**
 *  Redux saga class init
 */
import { takeEvery, all } from "redux-saga/effects";
import * as types from "../actions/types";
import newsSaga from "./newsSaga";
import newsSource from "./newsSource";

export default function* watch() {
  yield all([
    takeEvery(types.NEWS_REQUEST, newsSaga),
    takeEvery(types.NEWS_SOURCE, newsSource)
  ]);
}
