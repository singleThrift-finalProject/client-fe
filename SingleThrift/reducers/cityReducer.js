import {
  PAYMENT_GETCITY_FAIL,
  PAYMENT_GETCITY_PENDING,
  PAYMENT_GETCITY_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  cities: [],
  error: '',
};

export function cityReducer(state = initialState, action) {
  switch (action.type) {
    case PAYMENT_GETCITY_FAIL:
      return {
        ...state,
        isLoading: true,
      };
    case PAYMENT_GETCITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case PAYMENT_GETCITY_PENDING:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
