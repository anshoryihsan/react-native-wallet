import Axios from 'axios';

export default Axios.create({
  // baseURL: 'https://localhost:8080/api/v1',
  // baseURL: 'https://linux-9gl9:8000/api/v1',
  baseURL: 'https://wasdqe.herokuapp.com/api/v1/',
});
