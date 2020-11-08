const initialState = {
  userdata: {},
  userdatahistory: [],
  getalluserdata: [],
  insertuserdata: {},

  error: '',
};

const User = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
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
    case 'GET_All_USER_DATA':
      return {
        ...state,
        getalluserdata: payload,
      };
    case 'INSERT_USER_DATA':
      return {
        ...state,
        insertuserdata: payload,
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        updateuserdata: payload,
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
    case 'AUTH_ERROR':
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
export default User;
