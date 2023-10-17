import { UserDTO } from "@dtos/UserDTO";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserStoreState {
  user: UserDTO;
  setUser: (user: UserDTO) => void;
  setToken: (token: string) => void;
  getUser: () => UserDTO;
  removeUser: () => void;
}

// export const useUserStore = create<UserStoreState>()(
//   persist(
//     (set) => ({
//       user: {} as UserDTO,
//       setUser: (user: UserDTO) => set({ user }),
//       setToken: (token: string) =>
//         set((state: any) => ({
//           user: {
//             ...state.user,
//             access_token: token
//           }
//         })),
//       getUser: () => {
//         const state: any = useUserStore.getState();
//         return state.user;
//       },
//       removeUser: () => set({ user: {} as UserDTO })
//     }),
//     {
//       name: "user-storage",
//       storage: {
//         getItem: (name) =>
//           localStorage.getItem(name)
//             ? JSON.parse(localStorage.getItem(name) as string)
//             : null,
//         setItem: (name, value) =>
//           localStorage.setItem(name, JSON.stringify(value)),
//         removeItem: (name) => localStorage.removeItem(name)
//       }
//     }
//   )
// );

export const useUserStore = create<UserStoreState>((set) => ({
  user: {} as UserDTO,
  setUser: (user: UserDTO) => set({ user }),
  setToken: (token: string) =>
    set((state: any) => ({
      user: {
        ...state.user,
        access_token: token
      }
    })),
  getUser: () => {
    const state: any = useUserStore.getState();
    return state.user;
  },
  removeUser: () => set({ user: {} as UserDTO })
}));
