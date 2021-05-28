import axios from 'axios';
import {baseUrl} from './utils/const'

const instance = axios.create({
    baseURL: baseUrl,
  });

export default instance