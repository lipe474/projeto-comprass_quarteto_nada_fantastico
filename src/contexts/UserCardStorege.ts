import { create } from "zustand";

type UserTypes = {
  nameOnCard: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
};

interface UserCardStoregeState {
  user: UserTypes;
  setUser: (user: UserTypes) => void;
  setToken: (token: string) => void;
  getUser: () => UserTypes;
  removeUser: () => void;
}

export const useCardStore = create<UserCardStoregeState>((set) => ({
  user: {} as UserTypes,
  setUser: (user: UserTypes) => set({ user }),
  setToken: (token: string) =>
    set((state: any) => ({
      user: {
        ...state.user,
        access_token: token,
      },
    })),
  getUser: () => {
    const state: any = useCardStore.getState();
    return state.user;
  },
  removeUser: () => set({ user: {} as UserTypes }),
}));
