import {
  BUYER_FETCHPRODUCT_FAIL,
  BUYER_FETCHPRODUCT_PENDING,
  BUYER_FETCHPRODUCT_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  productsBuyer: [],
  error: '',
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case BUYER_FETCHPRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case BUYER_FETCHPRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsBuyer: action.payload,
      };
    case BUYER_FETCHPRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
