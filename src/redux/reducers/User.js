const initialState = {
  userdata: {},
  getalluserdata: [],
  userdatahistory: [],
  userdatatransaction: {},
  insertuserdata: {},

  success: false,
  message: '',
  loading: false,
};

const User = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'PROCESS_REQUES':
      return {
        ...state,
        loading: true,
      };
    case 'USER_DATA':
      return {
        ...state,
        userdata: payload,
      };
    case 'USER_DATA_HISTORY':
      return {
        ...state,
        userdatahistory: payload,
      };
    case 'USER_DATA_TRANSACTION':
      return {
        ...state,
        userdatatransaction: payload,
        loading: false,
      };
    case 'GET_All_USER_DATA':
      return {
        ...state,
        getalluserdata: payload,
        loading: false,
      };
    case 'INSERT_USER_DATA':
      return {
        ...state,
        insertuserdata: payload,
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        success: true,
        message: '',
      };
    case 'UPDATE_USER_PHONE':
      return {
        ...state,
        updateuserphone: payload,
      };
    case 'UPLOAD_PHOTO':
      return {
        ...state,
        uploadphoto: payload,
      };
    case 'INSERT_DATA':
      return {
        ...state,
        insertdata: payload,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        updatedata: payload,
      };
    case 'DELETE_DATA':
      return {
        ...state,
        delete: payload,
      };
    case 'STATUS_ERROR':
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case 'CLEAR':
      return {
        ...state,
        userdata: {},
        getalluserdata: [],
        userdatahistory: [],
        userdatatransaction: {},
        insertuserdata: {},
        success: false,
        message: '',
        loading: false,
      };
    default:
      return state;
  }
};
export default User;
