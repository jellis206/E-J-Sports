import { instance } from './server-instance.service';

export const attemptDeleteUser = async (credentials) => {
  return await deleteUser(credentials);
};

const deleteUser = async (credentials) => {
  let response;
  try {
    response = await instance.delete('/api/user', {
      data: {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      }
    });
  } catch (error) {
    setError("error deleting a ticket" + error);
  } finally {
    console.log(response);
    return response;
  }
};