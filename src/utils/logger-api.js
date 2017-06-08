import axios from 'axios';

const BASE_URL = 'http://localhost:5555';

export function logNewApp(data) {
  const url = `${BASE_URL}/api/log`;
  return axios.post(url, data);
}