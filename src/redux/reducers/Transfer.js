const initialState = {
  // data: [],
  statustransfer: {},
  transferhistory: {},
  historyfilter: {},
  loading: false,
};

const Transfer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'PROCESS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'TRANSFER_STATUS':
      return {
        ...state,
        statustransfer: payload,
        loading: false,
      };
    case 'TRANSFER_HISTORY':
      return {
        ...state,
        transferhistory: payload,
        loading: false,
      };
    case 'TRANSFER_FILTER':
      return {
        ...state,
        historyfilter: payload,
        loading: false,
      };
    default:
      return state;
  }
};

// const Transfer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case "TRANSFER_REQUEST_HISTORY":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "TRANSFER_SUCCESS_HISTORY":
//       return {
//         ...state,
//         loading: false,
//         isLogin: true,
//         data: action.payload.data,
//       };
//     case "TRANSFER_ERROR_HISTORY":
//       return {
//         ...state,
//         loading: false,
//         isLogin: false,
//         data: [],
//         error: action.payload,
//       };
//     case "TRANSFER_REQUEST_HISTORY_NAME":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "TRANSFER_REQUEST_HISTORY_NAME":
//       return {
//         ...state,
//         loading: false,
//         isLogin: true,
//         data: action.payload.data,
//       };
//     case "TRANSFER_REQUEST_HISTORY_NAME":
//       return {
//         ...state,
//         loading: false,
//         isLogin: false,
//         data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export default Transfer;
