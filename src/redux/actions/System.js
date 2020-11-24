const setsystemsocket = (socket) => {
  // console.log(socket.newSocket, 'sdajsdjhasjdhjas');
  // const socketIO = socket.newSocket;
  return {type: 'SET_SYSTEM_SOCKET', payload: socket};
};

export const enableNotification = (notif) => {
  return {type: 'ENABLE_NOTIFICATION', payload: notif};
};

export const setSystemSocket = (data) => (dispatch) => {
  // console.log(data.io, 'ini datasocket');
  // console.log(data, 'ini datasocket');
  // const {Socket} = data;
  // console.log(Socket, 'ini datasocket');
  return dispatch(setsystemsocket(data));
};

// export const enableNotification = (notif) => (dispatch) => {
//   return dispatch(enablenotification(notif));
// };
