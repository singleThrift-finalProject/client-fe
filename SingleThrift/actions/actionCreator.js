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
} from './actionType';

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
      console.log(accessToken);
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
