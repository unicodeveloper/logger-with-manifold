import axios from 'axios';

const BASE_URL = 'https://loggerapp-jxruffzvrv.now.sh';

export function logNewApp(data) {
  const url = `${BASE_URL}/api/log`;
  return axios.post(url, data);
}