import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}` || 'https://ulventech-react-exam.netlify.app/api/',
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export default api;
