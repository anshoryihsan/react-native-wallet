import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  // baseURL: 'http://192.168.43.164:8080/api/v1', //wifi
  // baseURL: '127.0.0.1:8080/api/v1',
  // baseURL: 'https://192.168.43.164:8079/api/v1',
  // baseURL: 'https://linux-9gl9:8079/api/v1',
  // baseURL: 'https://wasdqe.herokuapp.com/api/v1/',
  // baseURL: 'https://wasdzx.herokuapp.com/api/v1/',
  // baseURL: 'http://34.203.188.247:8079/api/v1/',
});
