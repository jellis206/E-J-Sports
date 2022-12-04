import { instance } from './server-instance.service';

export const attemptRegisterUser = async (credentials) => {
  return await addUser(credentials);
};

const addUser = async (credentials) => {
  let response;
  try {
    response = await instance.post('/api/user', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password
    });
  } catch (error) {
    setError("error deleting a ticket" + error);
  } finally {
    return response;
  }
};