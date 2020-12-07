import Axios from 'axios';
import axios from '../../helpers/axios';

const TransferRequest = () => {
  return {type: 'PROCESS_REQUEST'};
};
const TransferStatus = (data) => {
  return {type: 'TRANSFER_STATUS', payload: data};
};
const TransferHistory = (data) => {
  return {type: 'TRANSFER_HISTORY', payload: data};
};
const TransferFilter = (data) => {
  return {type: 'TRANSFER_FILTER', payload: data};
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

export const FilterHistory = (token, dateStart, dateEnd, filter) => (
  dispatch,
) => {
  console.log(filter);
  console.log(dateStart);
  console.log(dateEnd);
  // dispatch(TransferRequest());
  axios
    .post(
      `/transfer/filter?start=${dateStart}&end=${dateEnd}&filter=${filter}`,
      filter,
      {
        headers: {token: token},
      },
    )
    .then((res) => {
      // console.log(res.data);
      if (res.data.success) {
        // console.log(res.data, 'ini reshistory');
        return dispatch(TransferFilter(res.data.data));
      } else {
        // console.log(res.data, 'ini reshistory');
        return dispatch(TransferFilter(res.data.success));
      }
    })
    .catch((err) => {
      // console.log(res.data, 'ini reshistory');
      // console.log(err, 'error');
      return dispatch(TransferFilter(err.data.success));
    });
};
