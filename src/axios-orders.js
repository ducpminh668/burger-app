import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-4f8b1.firebaseio.com/'
});

export default instance;
