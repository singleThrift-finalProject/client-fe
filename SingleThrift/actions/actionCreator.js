import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  LOGIN_SETLOGIN_PENDING,
  LOGIN_SETLOGIN_SUCCESS,
  LOGIN_SETLOGIN_FAIL,
  BASE_URL_NGROK,
  BUYER_FETCHPRODUCT_PENDING,
  BUYER_FETCHPRODUCT_SUCCESS,
  BUYER_FETCHPRODUCT_FAIL,

  SELLER_FETCHPRODUCT_PENDING,
  SELLER_FETCHPRODUCT_SUCCESS,
  SELLER_FETCHPRODUCT_FAIL,
  FETCHPRODUCT_DETAILS_PENDING,
  FETCHPRODUCT_DETAILS_SUCCESS,
  FETCHPRODUCT_DETAILS_FAIL,

  BUYER_FETCHCART_PENDING,
  BUYER_FETCHCART_SUCCESS,

} from './actionType';

//LOGIN
export const setLoginPending = () => {
  return {
    type: LOGIN_SETLOGIN_PENDING,
  };
};
export const setLoginSuccess = (data) => {
  return {
    type: LOGIN_SETLOGIN_SUCCESS,
    payload: data,
  };
};
export const setLoginFail = (data) => {
  return {
    type: LOGIN_SETLOGIN_FAIL,
    payload: data,
  };
};
export const setLogin = (dataForm) => {
  return async (dispatch, _) => {
    try {
      dispatch(setLoginPending);
      const { data } = await axios.post(
        `${BASE_URL_NGROK}/users/login`,
        dataForm
      );
      await AsyncStorage.setItem(
        'access_token',
        JSON.stringify(data.access_token)
      );
      await AsyncStorage.setItem('data', JSON.stringify(data));
      dispatch(setLoginSuccess(data.access_token));
    } catch (error) {
      dispatch(setLoginFail(error));
    }
  };
};

//BUYER PRODUCTS
export const fetchProductBuyerPending = () => {
  return {
    type: BUYER_FETCHPRODUCT_PENDING,
  };
};
export const fetchProductBuyerSuccess = (data) => {
  return {
    type: BUYER_FETCHPRODUCT_SUCCESS,
    payload: data,
  };
};
export const fetchProductBuyerFail = (error) => {
  return {
    type: BUYER_FETCHPRODUCT_FAIL,
    payload: error,
  };
};
export const fetchProductBuyer = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchProductBuyerPending());
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL_NGROK}/products`,
        headers: {
          access_token: accessToken,
        },
      });
      dispatch(fetchProductBuyerSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchProductBuyerFail(error));
    }
  };
};


//SEllER PRODUCTS
export const fetchProductSellerPending = () => {
  return {
    type: SELLER_FETCHPRODUCT_PENDING,
  };
};
export const fetchProductSellerSuccess = (data) => {
  return {
    type: SELLER_FETCHPRODUCT_SUCCESS,
    payload: data,
  };
};
export const fetchProductSellerFail = (error) => {
  return {
    type: SELLER_FETCHPRODUCT_FAIL,
    payload: error,
  };
};
export const fetchProductSeller = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchProductSellerPending());
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      console.log(accessToken);
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL_NGROK}/seller`,

export const fetchCartPending = () => {
  return {
    type: BUYER_FETCHCART_PENDING,
  };
};
export const fetchCartSuccess = (data) => {
  return {
    type: BUYER_FETCHCART_SUCCESS,
    payload: data,
  };
};
export const fetchCartFail = (error) => {
  return {
    type: BUYER_FETCHPRODUCT_FAIL,
    payload: error,
  };
};
export const fetchCartBuyer = () => {
  // console.log('masuk');
  return async (dispatch, getState) => {
    try {
      dispatch(fetchCartPending());
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      // console.log(accessToken);
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL_NGROK}/cart`,

        headers: {
          access_token: accessToken,
        },
      });

      console.log(data)
      dispatch(fetchProductSellerSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchProductSellerFail(error));
    }
  };
};

//PRODUCTDETAILS
export const fetchProductDetailPending = () => {
  return {
    type: FETCHPRODUCT_DETAILS_PENDING,
  };
};
export const fetchProductDetailSuccess = (data) => {
  return {
    type: FETCHPRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};
export const fetchProductDetailFail = (error) => {
  return {
    type: FETCHPRODUCT_DETAILS_FAIL,
    payload: error,
  };
};
export const fetchProductDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      console.log(`MASUK KE CREATOR`)
      dispatch(fetchProductDetailPending());
      console.log(id)
      const accessToken = JSON.parse(
        await AsyncStorage.getItem('access_token')
      );
      console.log(accessToken);
      const { data } = await axios({
        method: 'GET',
        url: `${BASE_URL_NGROK}/products/${id}`,
        headers: {
          access_token: accessToken,
        },
      });
      console.log(data,`,,,,,,,,,,,,,,,,,,,`)
      dispatch(fetchProductDetailSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchProductDetailFail(error));

      // console.log(data);
      dispatch(fetchCartSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchCartFail(error));

    }
  };
};
