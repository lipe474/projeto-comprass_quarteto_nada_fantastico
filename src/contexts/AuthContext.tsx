import { createContext, ReactNode, useEffect, useState } from "react";

import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave
} from "../storage/storageAuthToken";
import {
  storageUserSave,
  storageUserGet,
  storageUserRemove
} from "../storage/storageUser";

import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { GetUserBySession, LoginUser } from "@requests/index";

export type AuthContextDataProps = {
  user: UserDTO;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  loadUserData: () => Promise<void>;
  updateUser: (id: number, name: string, avatar: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    await storageAuthTokenSave(token);
    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function login(email: string, password: string) {
    try {
      setIsLoadingUserStorageData(true);
      const responseToken = await LoginUser({ email, password });
      const responseUser = await GetUserBySession(responseToken.access_token);

      if (responseToken.access_token && responseUser) {
        await storageUserAndTokenSave(responseUser, responseToken.access_token);
        userAndTokenUpdate(responseUser, responseToken.access_token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function logout() {
    try {
      setIsLoadingUserStorageData(true);

      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUser(id: number, name: string, avatar: string) {
    try {
      setIsLoadingUserStorageData(true);

      storageUserSave({ ...user, name, avatar });
      setUser({ ...user, name, avatar });

      await api.put(`/users/${id}`, {
        name
      });

      setIsLoadingUserStorageData(false);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      const { token } = await storageAuthTokenGet();

      const response = await GetUserBySession(token);

      if (token && response) {
        userAndTokenUpdate(response, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loadUserData,
        updateUser,
        isLoadingUserStorageData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
