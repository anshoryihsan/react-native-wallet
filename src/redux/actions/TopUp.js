// import Axios from "axios";

// const TopUpRequest = () => {
//   return { type: "TOPUP_REQUEST" };
// };
// const TopUpSuccess = (data) => {
//   return { type: "TOPUP_SUCCESS", payload: data };
// };
// const TopUpError = (error) => {
//   return { type: "TOPUP_ERROR", payload: error };
// };

// export const getTopUp = (fields) => {
//   return (dispatch) => {
//     dispatch(TopUpRequest());
//     //   console.log(fields, "skaskddksdwidaiwdaiPHONE");
//     // return await Axios.patch('http://localhost:8080/api/v1/profile', { email: fields.email },);
//     return Axios({
//       method: "GET",
//       url: "http://localhost:8080/api/v1/top-up",
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(TopUpSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(TopUpError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(TopUpError(message));
//       });
//   };
// };
