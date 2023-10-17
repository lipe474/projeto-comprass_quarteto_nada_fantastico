export type UserDTO = {
  id?: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  access_token?: string;
};

export type UserContext = {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  access_token?: string;
};

export type CreateUserDTO = Omit<UserDTO, "id" | "avatar">;
export type LoginUserDTO = Omit<UserDTO, "id" | "name" | "avatar">;
