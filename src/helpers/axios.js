import Axios from 'axios';

export default Axios.create({
  // baseURL: 'http://localhost:8080/api/v1',
  baseURL: 'http://localhost:127.0.0.1:8080/api/v1',
});
