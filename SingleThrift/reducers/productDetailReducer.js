import {
    FETCHPRODUCT_DETAILS_FAIL,
    FETCHPRODUCT_DETAILS_PENDING,
    FETCHPRODUCT_DETAILS_SUCCESS,
} from '../actions/actionType';

const initialState = {
    isLoading: true,
    productDetails: {},
    error: '',
};

export function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHPRODUCT_DETAILS_PENDING:
            console.log(`masukkk!!!!!! pending`)
            return {
                ...state,
                isLoading: true,
            };
        case FETCHPRODUCT_DETAILS_SUCCESS:
            console.log(`masukkk!!!!!! suces`)
            return {
                ...state,
                isLoading: false,
                productDetails: action.payload,
            };
            case FETCHPRODUCT_DETAILS_FAIL:
                console.log(`masukkk!!!!!! Fail`)
                return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
