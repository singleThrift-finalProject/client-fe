import {
  LOGIN_SETLOGIN_PENDING,
  LOGIN_SETLOGIN_SUCCESS,
  LOGIN_SETLOGIN_FAIL,
  BASE_URL_NGROK,
} from './actionType';

export const setLoginPending = () => {
  return {
    type: LOGIN_SETLOGIN_PENDING,
  };
};
export const setLoginSuccess = () => {
  return {
    type: LOGIN_SETLOGIN_SUCCESS,
  };
};
export const setLoginFail = () => {
  console.log('masuk fail kayaknya ???');
  return {
    type: LOGIN_SETLOGIN_FAIL,
  };
};
export const setLogin = (data) => {
  console.log(data, '<--');
  return async (dispatch, _) => {
    try {
      dispatch(setLoginPending);
      const response = await fetch(`${BASE_URL_NGROK}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      // if (!response.ok) {
      //   const responseJson = await response.json();
      //   console.log(responseJson, '<<!');
      //   dispatch(setLoginFail(responseJson));
      // }
      // const responseJson = await response.json();
      // console.log(responseJson, '<<v');
      // dispatch(setLoginSuccess(responseJson));
    } catch (error) {
      dispatch(setLoginFail(error));
    }
  };
};
