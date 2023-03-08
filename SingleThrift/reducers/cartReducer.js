import {
  BUYER_FETCHCART_FAIL,
  BUYER_FETCHCART_PENDING,
  BUYER_FETCHCART_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  carts: [],
  error: '',
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case BUYER_FETCHCART_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case BUYER_FETCHCART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carts: action.payload,
      };
    case BUYER_FETCHCART_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
