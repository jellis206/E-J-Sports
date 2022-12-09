import axios from 'axios';
import { serverCodes } from './server-codes.enum';

export const instance = axios;

export const checkValidity = (response) => {
  if (response != null) {
    if (response.status === 200) {
      return serverCodes.Good;
    }
    return serverCodes.Meh;
  }
  return serverCodes.Bad;
};