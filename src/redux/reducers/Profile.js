// const initialState = {
//   data: [],
//   loading: false,
// };

// const Profile = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case "USERS_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "USERS_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         isLogin: true,
//         data: action.payload.data,
//       };
//     case "USERS_ERROR":
//       return {
//         ...state,
//         lloading: false,
//         isLogin: false,
//         data: [],
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default Profile;
