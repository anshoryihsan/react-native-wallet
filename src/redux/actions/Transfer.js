import Axios from 'axios';
import axios from '../../helpers/axios';

// const TransferRequest = () => {
//   return {type: 'TRANSFER_REQUEST_HISTORY'};
// };
const TransferSuccess = (data) => {
  return {type: 'TRANSFER_SUCCESS_HISTORY', payload: data};
};
const TransferError = (error) => {
  return {type: 'TRANSFER_ERROR_HISTORY', payload: error};
};
const TransferRequestName = () => {
  return {type: 'TRANSFER_REQUEST_HISTORY_NAME'};
};
const TransferSuccessName = (data) => {
  return {type: 'TRANSFER_SUCCESS_HISTORY_NAME', payload: data};
};
const TransferErrorName = (error) => {
  return {type: 'TRANSFER_ERROR_HISTORY_NAME', payload: error};
};
///
const TransferRequest = () => {
  return {type: 'PROCESS_REQUEST'};
};
const TransferStatus = (data) => {
  return {type: 'TRANSFER_STATUS', payload: data};
};
const TransferHistory = (data) => {
  return {type: 'TRANSFER_HISTORY', payload: data};
};

export const Transfer = (token, data) => (dispatch) => {
  dispatch(TransferRequest());
  axios
    .patch('/transfer', data, {headers: {token: `${token}`}})
    .then((res) => {
      if (res.data.success) {
        return dispatch(TransferStatus(res.data));
      } else {
        return dispatch(TransferStatus(res.data));
      }
    })
    .catch((err) => {
      return dispatch(TransferStatus(err.data));
    });
};

export const HistoryTransfer = (token, page = 0) => (dispatch) => {
  dispatch(TransferRequest());
  axios
    .get(`/transfer?limit=4&page=${page}`, {headers: {token: `${token}`}})
    .then((res) => {
      // console.log(res, 'ini reshistory');
      if (res.data.success) {
        return dispatch(TransferHistory(res.data.data));
      } else {
        return dispatch(TransferHistory(res.data.success));
      }
    })
    .catch((err) => {
      return dispatch(TransferHistory(err.data.success));
    });
};

export const TransferHistorySearch = (fields) => {
  return (dispatch) => {
    console.log(fields, 'fields');
    dispatch(TransferRequestName());
    return Axios({
      method: 'GET',
      url: `http://localhost:8080/api/v1/transfer/search?search=${fields.search}`,
      headers: {
        token: fields.token,
      },
    })
      .then((res) => {
        // console.log(res.data.success, "hasil");
        if (res.data.success) {
          const data = res.data;
          dispatch(TransferSuccessName(data));
          // console.log(data.data[0]);
        } else {
          const message = res.data.data;
          dispatch(TransferErrorName(message));
        }
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TransferError(message));
      });
  };
};
