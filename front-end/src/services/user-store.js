import create from 'zustand';

export const useUserStore = create(
  set => {
    return {
      name: '',
      email: '',
      password: '',
      loggedIn: false,

      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPassword: (password) => set({ password }),
      setLoggedIn: (loggedIn) => set({ loggedIn }),

      signUserIn: (user) => set(() => ({
        name: user.name,
        email: user.email,
        password: user.password,
        loggedIn: true
      })),

      logUserOut: () => set(() => ({
        name: '',
        email: '',
        password: '',
        loggedIn: false
      }))
    };
  });