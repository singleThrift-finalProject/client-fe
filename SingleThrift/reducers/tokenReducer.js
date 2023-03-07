import {
  TOKEN_DELTOKEN_FAIL,
  TOKEN_DELTOKEN_PENDING,
  TOKEN_DELTOKEN_SUCCESS,
  TOKEN_GETTOKEN_FAIL,
  TOKEN_GETTOKEN_PENDING,
  TOKEN_GETTOKEN_SUCCESS,
  TOKEN_SETTOKEN_FAIL,
  TOKEN_SETTOKEN_PENDING,
  TOKEN_SETTOKEN_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoadingGetToken: true,
  isLoadingSetToken: true,
  isLoadingDelToken: true,
  token: {},
  error: '',
};

export function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case TOKEN_GETTOKEN_PENDING:
      return {
        ...state,
        isLoadingGetToken: true,
      };
    case TOKEN_GETTOKEN_SUCCESS:
      return {
        ...state,
        isLoadingGetToken: false,
        token: action.payload,
      };
    case TOKEN_GETTOKEN_FAIL:
      return {
        ...state,
        isLoadingGetToken: false,
        error: action.payload,
      };
    case TOKEN_SETTOKEN_PENDING:
      return {
        ...state,
        isLoadingSetToken: true,
      };
    case TOKEN_SETTOKEN_SUCCESS:
      return {
        ...state,
        isLoadingSetToken: false,
        token: action.payload,
      };
    case TOKEN_SETTOKEN_FAIL:
      return {
        ...state,
        isLoadingSetToken: false,
        error: action.payload,
      };
    case TOKEN_DELTOKEN_PENDING:
      return {
        ...state,
        isLoadingDelToken: true,
      };
    case TOKEN_DELTOKEN_SUCCESS:
      return {
        ...state,
        isLoadingDelToken: false,
        token: action.payload,
      };
    case TOKEN_DELTOKEN_FAIL:
      return {
        ...state,
        isLoadingDelToken: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
