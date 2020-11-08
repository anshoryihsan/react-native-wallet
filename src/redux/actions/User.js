// import axios from '../../helper/axios';

// const userData = (data) => {
//   return {type: 'USER_DATA', payload: data};
// };
// const userDataTransactionHistory = (data) => {
//   return {type: 'USER_DATA_HISTORY', payload: data};
// };
// const getAllUserData = (data) => {
//   return {type: 'GET_All_USER_DATA', payload: data};
// };
// const uploadPhoto = (data) => {
//   return {type: 'UPLOAD_PHOTO', payload: data};
// };
// const updateUserPhone = (data) => {
//   return {type: 'UPDATE_USER_PHONE', payload: data};
// };
// const updateUserData = (data) => {
//   return {type: 'UPDATE_USER_DATA', payload: data};
// };
// const updateData = (data) => {
//   return {type: 'UPDATE_DATA', payload: data};
// };
// const insertData = (data) => {
//   return {type: 'INSERT_DATA', payload: data};
// };
// const deleteData = (data) => {
//   return {type: 'DELETE_DATA', payload: data};
// };
// const statusError = (error) => {
//   return {type: 'STATUS_ERROR', payload: error};
// };

// export const UserData = (token) => (dispatch) => {
//   axios
//     .get('/profile/tokenId', {headers: {token: `${token}`}})
//     .then((res) => {
//       //   console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(userData(res.data.data[0]));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       //   console.log(err);
//       dispatch(statusError(err.data.data));
//     });
// };

// export const UserTransactionHistory = (token) => (dispatch) => {
//   axios
//     .get('/transfer', {headers: {token: `${token}`}})
//     .then((res) => {
//       //   console.log(res.data.data, 'transaction history');
//       if (res.data.success) {
//         dispatch(userDataTransactionHistory(res.data.data));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       //   console.log(err);
//       dispatch(statusError(err.data.data));
//     });
// };

// export const GetAllUserData = (token, name = null, page = 0, reset = true) => (
//   dispatch
// ) => {
//   axios
//     .get(`/profile/search?name=${name}&limit=4&page=${page}`, {
//       headers: {token: `${token}`},
//     })
//     .then((res) => {
//       //   console.log(res.data.data, 'transaction history');
//       if (res.data.success) {
//         if (reset) return dispatch(getAllUserData(res.data.data));
//         return dispatch(getAllUserData(res.data.data));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       //   console.log(err);
//       dispatch(statusError(err.data.data));
//     });
// };

// export const UploadPhoto = (token, photo) => (dispatch) => {
//   axios
//     .patch('/profile/', photo, {
//       headers: {
//         'content-type': 'multipart/form-data',
//         token: `${token}`,
//       },
//     })
//     .then((res) => {
//       //   console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(uploadPhoto(res.data.data[0]));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       // console.log(err);
//       dispatch(statusError(err));
//     });
// };

// export const UpdateUserData = (token, data) => (dispatch) => {
//   // console.log(data, 'delete');
//   axios
//     .patch('/profile/', data, {
//       headers: {
//         token: `${token}`,
//       },
//     })
//     .then((res) => {
//       //   console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(updateUserData(res.data.data[0]));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       // console.log(err);
//       dispatch(statusError(err));
//     });
// };

// export const UpdateUserProfile = (token, data, history) => (dispatch) => {
//   // console.log(data, 'update');
//   axios
//     .patch('/profile/', data, {
//       headers: {
//         token: `${token}`,
//       },
//     })
//     .then((res) => {
//       console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(updateData(res.data.data[0]));
//         history.replace('/profile');
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       // console.log(err);
//       dispatch(statusError(err));
//     });
// };
// export const DeleteUserPhone = (token, data, history) => (dispatch) => {
//   // console.log(data, 'delete');
//   axios
//     .patch('/profile/', data, {
//       headers: {
//         token: `${token}`,
//       },
//     })
//     .then((res) => {
//       //   console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(deleteData(res.data.data[0]));
//         history.push('/profile/change-phone');
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       // console.log(err);
//       dispatch(statusError(err));
//     });
// };

// export const InsertUserData = (token, data) => (dispatch) => {
//   axios
//     .push('/profile/', {headers: {token: `${token}`}})
//     .then((res) => {
//       //   console.log(res.data, 'userrr data');
//       if (res.data.success) {
//         dispatch(insertData(res.data.data[0]));
//       } else {
//         dispatch(statusError(res.data.data));
//       }
//     })
//     .catch((err) => {
//       //   console.log(err);
//       dispatch(statusError(err.data.data));
//     });
// };
