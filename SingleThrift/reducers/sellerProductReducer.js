import {
    SELLER_FETCHPRODUCT_FAIL,
    SELLER_FETCHPRODUCT_SUCCESS,
    SELLER_FETCHPRODUCT_PENDING
  } from '../actions/actionType';
  
  const initialState = {
    isLoading: true,
    productsSeller: [],
    error: '',
  };
  
  export function sellerProductReducer(state = initialState, action) {
    switch (action.type) {
      case SELLER_FETCHPRODUCT_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case SELLER_FETCHPRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          productsSeller: action.payload,
        };
      case SELLER_FETCHPRODUCT_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  