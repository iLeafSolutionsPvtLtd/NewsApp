/*
 * Reducer actions related with login
 */
import * as types from "./types";

export function requestNews(searchKey, source) {
  console.log("hhhhhhhhh", searchKey);

  return {
    type: types.NEWS_REQUEST,
    searchKey,
    source
  };
}

export function onNewsResponse(response) {
  return {
    type: types.NEWS_RESPONSE,
    response
  };
}
export function onNewsSource() {
  return {
    type: types.NEWS_SOURCE
  };
}
export function onNewsSourceResponse(response) {
  return {
    type: types.NEWS_SOURCE_RES,
    response
  };
}
