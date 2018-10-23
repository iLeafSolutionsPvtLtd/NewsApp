/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from "redux-saga/effects";
import { delay } from "redux-saga";

import { Alert } from "react-native";
import newsUser from "app/api/methods/newsUser";
import newsSource from "app/api/methods/newsSource";
import * as newsActions from "app/actions/newsActions";
import * as navigationActions from "app/actions/navigationActions";

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  try {
    console.log("called..................", action.source);
    //how to call api
    const response = yield call(newsUser, action.searchKey, action.source);

    //mock response
    // const response = { success: true, data: { id: 1 } };
    console.log("called..................11122222", response);
    if (response.status === "ok") {
      yield put(newsActions.onNewsResponse(response.articles));
      //     yield put(newsActions.disableLoader({}));
      yield call(navigationActions.navigateToHome);
    } else {
      //  yield put(newsActions.loginFailed());
      //   yield put(newsActions.disableLoader({}));
      setTimeout(() => {
        console.log("called..................111", response);
      }, 200);
    }
  } catch (err) {
    console.log("errrrrrrrrrrrrrrrrr", err);
  }
}
