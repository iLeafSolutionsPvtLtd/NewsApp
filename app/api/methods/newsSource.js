import { apiSource } from "app/api";
import ApiConstants from "../ApiConstants";

export default function newsSource() {
  return apiSource();
  // ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
  // null,
  // 'post',
  // null
}
