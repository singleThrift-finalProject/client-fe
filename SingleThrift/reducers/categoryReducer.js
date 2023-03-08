import {
    FETCH_CATEGORY_FAIL,
    FETCH_CATEGORY_PENDING,
    FETCH_CATEGORY_SUCCESS,
  } from '../actions/actionType';
  
  const initialState = {
    isLoading: true,
    categories: [],
    error: '',
  };
  
  export function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_CATEGORY_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_CATEGORY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          categories: action.payload,
        };
      case FETCH_CATEGORY_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  