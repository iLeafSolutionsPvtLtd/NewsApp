// General api to access data
import ApiConstants from "./ApiConstants";
export function api(searchKey, source) {
  return fetch(
    `${ApiConstants.FIRST_URL}q=${searchKey}&sources=${source}&${
      ApiConstants.LAST_URL
    }`
  )
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
export function apiSource() {
  return fetch(ApiConstants.BASE_URL)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
