import { FormCreateUserDTO } from "@dtos/FormCreateUserDTO";
import { CreateUserDTO, LoginUserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

export async function CreateUser({ name, email, password }: CreateUserDTO) {
  try {
    await api.post("/users", {
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
    });
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function LoginUser({ email, password }: LoginUserDTO) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password
    });

    return response.data;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}
