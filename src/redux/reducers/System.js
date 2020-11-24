const {ActionSheetIOS} = require('react-native');

const initialState = {
  enableNotification: false,
  socket: null,
};
const systemReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ENABLE_NOTIFICATION':
      return {
        ...state,
        enableNotification: payload,
      };
    case 'SET_SYSTEM_SOCKET':
      return {
        ...state,
        socket: payload,
      };
    default:
      return state;
  }
};

export default systemReducer;
