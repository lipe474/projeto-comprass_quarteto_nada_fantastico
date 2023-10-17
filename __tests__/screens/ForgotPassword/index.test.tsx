import { act, fireEvent, waitFor } from "@testing-library/react-native";
import { render } from "../../utils/customRender";
import { GetAllUsers, UpdatePassword } from "@requests/index";
import { UserDTO } from "@dtos/UserDTO";
import { ForgotPassword } from "@screens/ForgotPassword";
import { api } from "@services/api";
import { mockUpdateUserAPIResponse } from "../../mocks/api/mockUpdateUserAPIResponse";
import { mockGetUsersAPIResponse } from "../../mocks/api/mockGetUsersAPIResponse";

jest.mock("@services/api");

describe("ForgotPassword screen", () => {
  it("should display an error message when the email doesn't exist", async () => {
    const { getByText } = render(<ForgotPassword />);
    const errorMessage = "This email doesn’t exist";

    const emailInput = getByText("Email");
    const searchButton = getByText("SEARCH");

    jest.spyOn(api, "get").mockRejectedValue({ data: errorMessage });

    act(() => {
      fireEvent.changeText(emailInput, "nonexistent@example.com");
      fireEvent.press(searchButton);
    });

    waitFor(() => {
      expect(getByText(errorMessage)).toBeTruthy();
      expect(emailInput).toHaveProp("value", "nonexistent@example.com");
    });
  });

  it("should set the user ID when the email exists", async () => {
    const user: UserDTO = {
      id: 123,
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password"
    };

    jest.spyOn(api, "get").mockResolvedValue({ data: [user] });

    const { getByText } = render(<ForgotPassword />);

    const emailInput = getByText("Email");
    const searchButton = getByText("SEARCH");

    act(() => {
      fireEvent.changeText(emailInput, user.email);
      fireEvent.press(searchButton);
    });

    waitFor(() => {
      expect(emailInput).toHaveProp("value", user.email);
      expect(GetAllUsers).toHaveBeenCalledTimes(1);
      expect(GetAllUsers).toHaveBeenCalledWith();
    });
  });

  it("should display an error message when GetAllUsers throws an error", async () => {
    const mockError = new Error("Unable to get users, try later");
    jest.spyOn(api, "get").mockRejectedValue(mockError);

    const { getByText } = render(<ForgotPassword />);

    const emailInput = getByText("Email");
    const searchButton = getByText("SEARCH");

    act(() => {
      fireEvent.changeText(emailInput, "johndoe@example.com");
      fireEvent.press(searchButton);
    });

    waitFor(() => {
      expect(getByText(/unable/i)).toBeTruthy();
      expect(emailInput).toHaveProp("value", "johndoe@example.com");
      expect(GetAllUsers).toHaveBeenCalledTimes(1);
      expect(GetAllUsers).toHaveBeenCalledWith();
    });
  });

  it("should submit email, find user, and submit valid passwords", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockGetUsersAPIResponse });
    jest
      .spyOn(api, "put")
      .mockResolvedValue({ data: mockUpdateUserAPIResponse });

    const responseGetUser = await GetAllUsers();
    const responseUpdate = await UpdatePassword(1, "newpassword");

    const { getByText } = render(<ForgotPassword />);

    const emailInput = getByText("Email");
    const searchButton = getByText("SEARCH");

    act(() => {
      fireEvent.changeText(emailInput, "test@example.com");
      fireEvent.press(searchButton);
    });

    waitFor(() => {
      expect(responseGetUser.length).toBeGreaterThan(0);
    });

    const newPasswordInput = getByText("New Password");
    const confirmPasswordInput = getByText("Confirm New Password");
    const confirmButton = getByText("CONFIRM");

    act(() => {
      fireEvent.changeText(newPasswordInput, "newpassword");
      fireEvent.changeText(confirmPasswordInput, "newpassword");
      fireEvent.press(confirmButton);
    });

    waitFor(() => {
      expect(responseUpdate).toBeTruthy();
    });
  });
});
