// import Axios from "axios";

// const TransferRequest = () => {
//   return { type: "TRANSFER_REQUEST_HISTORY" };
// };
// const TransferSuccess = (data) => {
//   return { type: "TRANSFER_SUCCESS_HISTORY", payload: data };
// };
// const TransferError = (error) => {
//   return { type: "TRANSFER_ERROR_HISTORY", payload: error };
// };
// const TransferRequestName = () => {
//   return { type: "TRANSFER_REQUEST_HISTORY_NAME" };
// };
// const TransferSuccessName = (data) => {
//   return { type: "TRANSFER_SUCCESS_HISTORY_NAME", payload: data };
// };
// const TransferErrorName = (error) => {
//   return { type: "TRANSFER_ERROR_HISTORY_NAME", payload: error };
// };

// export const TransferHistory = (fields) => {
//   return (dispatch) => {
//     // console.log(fields, "fields");
//     dispatch(TransferRequest());
//     return Axios({
//       method: "GET",
//       url: `http://localhost:8080/api/v1/transfer?limit=${fields.limit}&page=${fields.page}`,
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(TransferSuccess(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(TransferError(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(TransferError(message));
//       });
//   };
// };

// export const TransferHistorySearch = (fields) => {
//   return (dispatch) => {
//     console.log(fields, "fields");
//     dispatch(TransferRequestName());
//     return Axios({
//       method: "GET",
//       url: `http://localhost:8080/api/v1/transfer/search?search=${fields.search}`,
//       headers: {
//         token: fields.token,
//       },
//     })
//       .then((res) => {
//         // console.log(res.data.success, "hasil");
//         if (res.data.success) {
//           const data = res.data;
//           dispatch(TransferSuccessName(data));
//           // console.log(data.data[0]);
//         } else {
//           const message = res.data.data;
//           dispatch(TransferErrorName(message));
//         }
//       })
//       .catch((err) => {
//         const message = err.message;
//         dispatch(TransferError(message));
//       });
//   };
// };
