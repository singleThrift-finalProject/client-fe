import {
  LOGIN_SETLOGIN_FAIL,
  LOGIN_SETLOGIN_PENDING,
  LOGIN_SETLOGIN_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoadingSetLogin: true,
  token: {},
  error: '',
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SETLOGIN_PENDING:
      return {
        ...state,
        isLoadingSetLogin: true,
      };
    case LOGIN_SETLOGIN_SUCCESS:
      return {
        ...state,
        isLoadingSetLogin: false,
        token: action.payload,
      };
    case LOGIN_SETLOGIN_FAIL:
      return {
        ...state,
        isLoadingSetLogin: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
