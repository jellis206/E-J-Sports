import { instance } from './server-instance.service';

export const attemptUserLogin = async (credentials) => {
  return await getUser(credentials);
};

const getUser = async (credentials) => {
  let response;
  try {
    response = await instance.get('/api/user', {
      params: {
        email: credentials.email,
        password: credentials.password
      }
    });
  } catch (error) {
    setError("error deleting a ticket" + error);
  } finally {
    return response;
  }
};