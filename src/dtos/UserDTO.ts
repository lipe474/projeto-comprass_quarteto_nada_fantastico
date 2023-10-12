export type UserDTO = {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

export type CreateUserDTO = Omit<UserDTO, "id" | "avatar">;
export type LoginUserDTO = Omit<UserDTO, "id" | "name" | "avatar">;
