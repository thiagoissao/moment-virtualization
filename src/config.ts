import axios from 'axios';

const restApi = axios.create({
  baseURL: 'https://randomuser.me',
});

export default restApi;
