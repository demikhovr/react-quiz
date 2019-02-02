import axios from 'axios';
import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from './actionTypes';

export const authSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

export const logout = () => {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('uid');
  window.localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
  };
};

export const autoLogout = time => (dispatch) => {
  setTimeout(() => dispatch(logout()), time * 1000);
};

export const autoLogin = () => (dispatch) => {
  const token = window.localStorage.getItem('token');

  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(window.localStorage.getItem('expirationDate'));

    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
      dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  }
};

export const auth = (email, password, isLogin) => async (dispatch) => {
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk';

  if (isLogin) {
    url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDRNnBkkGKcuqdQ7rPj-fNaHakX1pvDxgk';
  }

  const response = await axios.post(url, authData);
  const { idToken, localId, expiresIn } = response.data;
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

  window.localStorage.setItem('token', idToken);
  window.localStorage.setItem('uid', localId);
  window.localStorage.setItem('expirationDate', expirationDate);

  dispatch(authSuccess(idToken));
  dispatch(autoLogout(expiresIn));
};
