import create from 'zustand';

export const useAppStore = create(set => {
  return {
    mobileMenuActive: false,
    toggleOn: () => set(() => ({ mobileMenuActive: true })),
    toggleOff: () => set(() => ({ mobileMenuActive: false }))
  };
});