import create from 'zustand';
import { logUserOut } from './login.service';

export const useUserStore = create(set => {
  return {
    name: '',
    email: '',
    password: '',
    loggedIn: false,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setLoggedIn: (loggedIn) => set({ loggedIn }),
    logUserOut: () => {
      set((state) => omit(state, [ 'name', 'email', 'password' ], true));

    }
  };
});