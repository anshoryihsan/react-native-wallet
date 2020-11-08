// import Axios from "axios";

// const UserRequest = () => {
//   return { type: "USERS_REQUEST" };
// };
// const UserSuccess = (data) => {
//   return { type: "USERS_SUCCESS", payload: data };
// };
// const UserError = (error) => {
//   return { type: "USERS_ERROR", payload: error };
// };

// export const getUserToken = (fields) => {
//   return (dispatch) => {
//     // console.log(fields, "fields");
//     dispatch(UserRequest());
//     return Axios({
//       method: "GET",
//       url: `http://localhost:8080/api/v1/profile/search`,
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(UserSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(UserError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(UserError(message));
//       });
//   };
// };
// export const uploadPhoto = (fields) => {
//   return (dispatch) => {
//     // console.log(fields.image, "FIELDSSSS IMAAAGGEEE");
//     dispatch(UserRequest());
//     const formData = new FormData();
//     formData.append("image", fields.image);
//     return Axios({
//       method: "PATCH",
//       url: "http://localhost:8080/api/v1/profile",
//       data: { image: fields.image },
//       headers: {
//         "content-type": "multipart/form-data",
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(UserSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(UserError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(UserError(message));
//       });
//   };
// };
// export const deleteUserPhone = (fields) => {
//   return (dispatch) => {
//     dispatch(UserRequest());
//     // console.log(fields, "skaskddksdwidaiwdaiPHONE");
//     // return await Axios.patch('http://localhost:8080/api/v1/profile', { email: fields.email },);
//     return Axios({
//       method: "PATCH",
//       url: "http://localhost:8080/api/v1/profile",
//       data: { phone: " " },
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           // console.log(res, "actionTEST");
//           // dispatch(UserSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(UserError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(UserError(message));
//       });
//   };
// };
// export const updatePassword = (fields) => {
//   return (dispatch) => {
//     dispatch(UserRequest());
//     // console.log(fields, "skaskddksdwidaiwdaiPHONE");
//     // return await Axios.patch('http://localhost:8080/api/v1/profile', { email: fields.email },);
//     return Axios({
//       method: "PATCH",
//       url: "http://localhost:8080/api/v1/profile",
//       data: { password: fields.password },
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(UserSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(UserError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(UserError(message));
//       });
//   };
// };
// export const getUserName = (fields) => {
//   // return (dispatch) => {
//   //   console.log(fields, "fields");
//   //   dispatch(UserRequest());
//   //   return Axios({
//   //     method: "GET",
//   //     url: `/api/v1/profile/searchus?name=a&limit=3&page=1`,
//   //     headers: {
//   //       token: fields.token,
//   //     },
//   //   })
//   //     .then((res) => {
//   //       console.log(res.data.success, "hasil");
//   //       if (res.data.success) {
//   //         const data = res.data;
//   //         dispatch(UserSuccess(data));
//   //         // console.log(data.data[0]);
//   //       } else {
//   //         const message = res.data.data;
//   //         dispatch(UserError(message));
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       const message = err.message;
//   //       dispatch(UserError(message));
//   //     });
//   // };
// };
