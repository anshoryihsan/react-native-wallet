import axios from '../../helpers/axios';

const authSuccess = (data) => {
  return {type: 'AUTH_SUCCESS', payload: data};
};
const authError = (error) => {
  return {type: 'AUTH_ERROR', payload: error};
};
const authLogout = (error) => {
  return {type: 'LOGOUT', payload: error};
};
// import AsyncStorage from '@react-native-community/async-storage';
export const AuthLogin = (data) => (dispatch) => {
  // const {email, password} = data;
  const c = {email: 'as', password: 'sd'};
  // console.log(email);
  axios
    .post('/auth/login', c)
    .then((res) => {
      if (res.data.success) {
        // return dispatch(authSuccess(res.data.data));
        // if (res.data.data.role !== 24) return history.push('/home');
        // return history.push('/home');
      } else {
        // return dispatch(authError(res.data.data));
      }
    })
    .catch((err) => {
      return dispatch(authError(err.data));
    });
};

// export const AuthSignup = (data, history) => (dispatch) => {
//   console.log(data);
//   axios
//     .post('/auth/register', data)
//     .then((res) => {
//       if (res.data.success) {
//         dispatch(authSuccess(res.data.data));
//         return history.replace(`/login`);
//       } else {
//         dispatch(authError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       dispatch(authError(err.data));
//     });
// };

// export const AuthLogout = (history) => (dispatch) => {
//   dispatch(authLogout(undefined));
//   return history.push('/');
// };
