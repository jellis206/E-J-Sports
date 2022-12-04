import { instance } from './server-instance.service';

export const attemptUpdateUser = async (update) => {
  return await updateUser(update);

};

const updateUser = async (update) => {
  let response;
  try {
    response = await instance.post('/api/user/update', {
      changes: update.changes,
      user: update.user
    });
  } catch (error) {
    setError("error deleting a ticket" + error);
  } finally {
    return response;
  }
};