import { api } from "app/api";
import ApiConstants from "../ApiConstants";

export default function newsUser(searchKey, source) {
  return api(searchKey, source);
  // ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
  // null,
  // 'post',
  // null
}
