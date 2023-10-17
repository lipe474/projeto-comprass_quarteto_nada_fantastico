import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "./storageConfig";

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify(token));
}

export async function storageAuthTokenGet() {
  const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);

  const token = response ? JSON.parse(response) : {};

  return token;
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
}
