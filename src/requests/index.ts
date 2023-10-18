import { CreateUserDTO, LoginUserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

export async function CreateUser({ name, email, password }: CreateUserDTO) {
  try {
    const response = await api.post("/users", {
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
    });

    return response.data;
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

export async function GetAllUsers() {
  try {
    const response = await api.get("/users");

    return response.data;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function UpdateUser(id: number, name?: string, avatar?: string) {
  try {
    const response = await api.put(`/users/${id}`, {
      name,
      avatar
    });

    return response.data;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function GetUserBySession(access_token: string) {
  try {
    const response = await api.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    return response.data;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}

export async function SearchZipCode(cep: string) {
  try {
    const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);

    return response.data;
  } catch (error: any) {
    throw new AppError(error.message);
  }
}
