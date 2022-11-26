import create from 'zustand';

export const userStore = create(set => {
  return {
    userEmail: '',
    password: '',
    loggedIn: false
  };
});