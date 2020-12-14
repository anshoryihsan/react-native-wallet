import axios from '../../helpers/axios';

const TopUpRequest = () => {
  return {type: 'PROCESS_REQUEST_TOPUP'};
};
const getDataTopUp = (data) => {
  return {type: 'GET_DATA_HOW_TO_TOPUP', payload: data};
};
export const GetDataTopUp = (token) => (dispatch) => {
  dispatch(TopUpRequest);
  axios
    .get('/top-up', {headers: {token: `${token}`}})
    .then((res) => {
      //   console.log(res.data, 'userrr data');
      if (res.data.success) {
        dispatch(getDataTopUp(res.data.data));
      } else {
        dispatch(getDataTopUp(res.data.data));
      }
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(getDataTopUp(err.data.data));
    });
};
