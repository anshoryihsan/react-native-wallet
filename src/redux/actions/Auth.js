import axios from '../../helpers/axios';

const authSuccess = (data) => {
  return {type: 'AUTH_SUCCESS', payload: data};
};
const authError = (error) => {
  return {type: 'AUTH_ERROR', payload: error};
};
const authLogout = (error) => {
  return {type: 'LOGOUT'};
};
const isAdmin = () => {
  return {type: 'IS_ADMINfalse'};
};
const isUser = () => {
  return {type: 'IS_USER'};
};

export const AuthLogin = (data) => (dispatch) => {
  return axios
    .post('/auth/login', data)
    .then((res) => {
      if (res.data.success === true) {
        if (res.data.data.role === 24) {
          dispatch(isAdmin());
          dispatch(authSuccess(res.data.data));
        } else {
          dispatch(isUser());
          dispatch(authSuccess(res.data.data));
        }
      } else {
        dispatch(authError(res.data.data));
      }
    })
    .catch((err) => {
      // console.log(err, 'errorssss');
      // return callback(err, false);
      dispatch(authError(err.data));
    });
};

export const AuthSignup = (data, navigation) => (dispatch) => {
  // console.log(navigation, 'data');
  axios
    .post('/auth/register', data)
    .then((res) => {
      if (res.data.success) {
        // console.log(res, 'suksess');
        dispatch(authSuccess(res.data.data));
        return navigation.navigate('Login');
      } else {
        console.log(res, 'gagal');
        // dispatch(authError(res.data.data));
      }
    })
    .catch((err) => {
      console.log(err, 'eror');
      dispatch(authError(err.data));
    });
};

export const AuthLogout = () => (dispatch) => {
  dispatch(authLogout());
  //   return history.push('/');
};
