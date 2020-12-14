import axios from '../../helpers/axios';

const processReques = () => {
  return {type: 'PROCESS_REQUES'};
};
const userData = (data) => {
  return {type: 'USER_DATA', payload: data};
};
const userDataTransactionHistory = (data) => {
  return {type: 'USER_DATA_HISTORY', payload: data};
};
const userDataTransaction = (data) => {
  return {type: 'USER_DATA_TRANSACTION', payload: data};
};
const getAllUserData = (data) => {
  return {type: 'GET_All_USER_DATA', payload: data};
};
const updateUserData = (data) => {
  return {type: 'UPDATE_USER_DATA', payload: data};
};
const insertData = (data) => {
  return {type: 'INSERT_DATA', payload: data};
};
const deleteData = (data) => {
  return {type: 'DELETE_DATA', payload: data};
};
const statusError = (error) => {
  return {type: 'STATUS_ERROR', payload: error};
};
const clear = (data) => {
  return {type: 'CLEAR'};
};

export const UserData = (token) => (dispatch) => {
  axios
    .get('/profile/tokenId', {headers: {token: `${token}`}})
    .then((res) => {
      //   console.log(res.data, 'userrr data');
      if (res.data.success) {
        dispatch(userData(res.data.data[0]));
      } else {
        dispatch(statusError(res.data.data));
      }
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(statusError(err.data.data));
    });
};

export const UserTransactionHistory = (token) => (dispatch) => {
  axios
    .get('/transfer', {headers: {token: `${token}`}})
    .then((res) => {
      //   console.log(res.data.data, 'transaction history');
      if (res.data.success) {
        dispatch(userDataTransactionHistory(res.data.data));
      } else {
        dispatch(statusError(res.data.data));
      }
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(statusError(err.data.data));
    });
};

export const GetAllUserData = (token, name = null, page = 0) => (dispatch) => {
  dispatch(processReques());
  axios
    .get(`/profile/search?name=${name}&limit=4&page=${page}`, {
      headers: {token: `${token}`},
    })
    .then((res) => {
      //   console.log(res.data.data, 'transaction history');
      if (res.data.success) {
        // console.log(res);
        return dispatch(getAllUserData(res.data.data));
      } else {
        // console.log(err);
        dispatch(statusError(res.data.data));
      }
    })
    .catch((err) => {
      // console.log(err);
      dispatch(statusError(err.data.data));
    });
};

export const getUserId = (token, data) => (dispatch) => {
  const id = data;
  dispatch(processReques());
  axios
    .get(`/profile/${id}`, {headers: {token: `${token}`}})
    .then((res) => {
      // console.log(res.data.data[0]);
      if (res.data.success) {
        // console.log(res);
        // if (reset) return dispatch(getAllUserData(res.data.data));
        return dispatch(userDataTransaction(res.data.data[0]));
      } else {
        // console.log(err);
        return dispatch(statusError(res.data.data));
      }
      // console.log(res, 'berhasil');
    })
    .catch((err) => {
      return dispatch(statusError(err.data.data));
    });
};
export const ClearUserHistory = () => (dispatch) => {
  dispatch(clear());
};

export const UploadPhoto = (token, data) => (dispatch) => {
  console.log(data, 'sadasdqydhaud');
  axios
    .patch('/profile', data, {
      headers: {
        token: `${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      //   console.log(res.data, 'userrr data');
      if (res.data.success) {
        console.log('sukses');
        dispatch(updateUserData(res.data.success));
        dispatch(UserData(token));
      } else {
        dispatch(statusError(res.data.data));
        console.log(res, 'asdasdqwdad errrorr');
      }
    })
    .catch((err) => {
      console.log(err, 'errrorr');
      dispatch(statusError(err));
    });
};

export const UpdateUserData = (token, data) => (dispatch) => {
  axios
    .patch('/profile/', data, {
      headers: {
        token: `${token}`,
      },
    })
    .then((res) => {
      if (res.data.success) {
        dispatch(updateUserData(res.data.success));
        dispatch(UserData(token));
      } else {
        dispatch(statusError(res.data.success));
      }
    })
    .catch((err) => {
      dispatch(statusError(err));
    });
};

export const DeleteUserPhone = (token, data, history) => (dispatch) => {
  // console.log(data, 'delete');
  axios
    .patch('/profile/', data, {
      headers: {
        token: `${token}`,
      },
    })
    .then((res) => {
      //   console.log(res.data, 'userrr data');
      if (res.data.success) {
        dispatch(deleteData(res.data.data[0]));
        history.push('/profile/change-phone');
      } else {
        dispatch(statusError(res.data.data));
      }
    })
    .catch((err) => {
      // console.log(err);
      dispatch(statusError(err));
    });
};

export const InsertUserData = (token, data) => (dispatch) => {
  axios
    .push('/profile/', {headers: {token: `${token}`}})
    .then((res) => {
      //   console.log(res.data, 'userrr data');
      if (res.data.success) {
        dispatch(insertData(res.data.data[0]));
      } else {
        dispatch(statusError(res.data.data));
      }
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(statusError(err.data.data));
    });
};
