/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from "redux-saga/effects";
import { delay } from "redux-saga";

import { Alert } from "react-native";
import newsSource from "app/api/methods/newsSource";
import * as newsActions from "app/actions/newsActions";
import * as navigationActions from "app/actions/navigationActions";

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  try {
    //how to call api
    const response = yield call(newsSource);

    //mock response
    // const response = { success: true, data: { id: 1 } };
    console.log("called.................3333333333", response);
    if (response.status === "ok") {
      yield put(newsActions.onNewsSourceResponse(response));
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
