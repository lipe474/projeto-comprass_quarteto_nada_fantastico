// import { UserContext, UserDTO } from "@dtos/UserDTO";
// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// type UserStore = {
//   user: UserDTO;
//   setUser: (user: UserContext) => void;
//   setToken: (token: string) => void;
//   getUser: () => UserContext;
// };

// export const useUserStore = create(
//   persist(
//     (set, get) => ({
//       user: {} as UserContext,
//       setUser: (user: UserContext) => set({ user: user }),
//       setToken: (token: string) =>
//         set((state) => ({ user: { ...state.user, access_token: token } })),
//       getUser: () => ({ user: get().user })
//     }),
//     {
//       name: "user-storage",
//       storage: createJSONStorage(() => localStorage)
//     }
//   )
// );
