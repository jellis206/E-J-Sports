import create from 'zustand';

export const useAppStore = create(set => {
  return {
    mobileMenuActive: false,
    isLoading: false,
    toggleMenuOn: () => set(() => ({ mobileMenuActive: true })),
    toggleMenuOff: () => set(() => ({ mobileMenuActive: false })),
    setLoading: (onOrOff) => set(() => ({ isLoading: onOrOff })),
  };
});