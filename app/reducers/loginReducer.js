/* Login Reducer
 * handles login states in the app
 */
import createReducer from "app/lib/createReducer";
import * as types from "app/actions/types";

const initialState = {
  isLoggedIn: false,
  id: -1,
  username: "",
  password: ""
};

export const loginReducer = createReducer(initialState, {
  [types.NEWS_REQUEST](state, action) {
    return {
      ...state
    };
  },
  [types.LOGIN_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.NEWS_RESPONSE](state, action) {
    console.log("ressssssssssssssssssssssss", action.response);

    return {
      ...state,
      data: action.response
    };
  },
  [types.NEWS_SOURCE_RES](state, action) {
    console.log("ressssssssssssssssssssssss111111111", action.response);
    return {
      ...state,
      dataSource: action.response
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false
    };
  }
});
