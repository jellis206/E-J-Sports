import create from 'zustand';

export const useUserStore = create(set => {
  return {
    fullName: '',
    email: '',
    password: '',
    loggedIn: false,
    setUserFullName: (fullName) => set({ fullName }),
    setUserEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setLoggedIn: (loggedIn) => set({ loggedIn })
  };
});