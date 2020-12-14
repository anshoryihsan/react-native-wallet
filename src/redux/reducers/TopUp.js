const initialState = {
  datahowtopup: [],
  loading: false,
};

const TopUp = (state = initialState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case 'PROCESS_REQUEST_TOPUP':
      return {
        ...state,
        loading: true,
      };
    case 'GET_DATA_HOW_TO_TOPUP':
      return {
        ...state,
        datahowtopup: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default TopUp;
