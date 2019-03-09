import axios from 'axios';
export const cart = () => {
  return axios.get('http://localhost:3000/geo/getPosition').then(data => {
    return data;
  });
};
