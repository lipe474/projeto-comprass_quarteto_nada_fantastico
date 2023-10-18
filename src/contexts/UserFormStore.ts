import { create } from "zustand";
/*
type UserTypes = {
  logradouro: string;
  localidade: string;
  uf: string;
  name: string;
};

type State = {
  user: UserTypes;
  addUser: (user: UserTypes) => void;
  getUser: () => UserTypes;
};

const useUserFormStorege = create<State>((set) => ({
  user: {} as UserTypes,

  addUser: (user) => {
    set((state) => ({ user: { ...state.user, user } }));
  },

  getUser: () => {
    const state: any = useUserFormStorege.getState();
    return state.user;
  },
}));
*/

type UserTypes = {
  logradouro: string;
  localidade: string;
  uf: string;
  name: string;
};

interface UserStoreState {
  user: UserTypes;
  setUser: (user: UserTypes) => void;
  setToken: (token: string) => void;
  getUser: () => UserTypes;
  removeUser: () => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
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
    const state: any = useUserStore.getState();
    return state.user;
  },
  removeUser: () => set({ user: {} as UserTypes }),
}));
