import {
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react-native";
import { SignUp } from "@screens/SignUp";
import { api } from "@services/api";
import MockTheme from "../../mocks/mockTheme";
import MockNavigationContainer from "../../mocks/mockNavigationContainer";
import { mockCreateUserAPIResponse } from "../../mocks/api/mockCreateUserAPIResponse";

describe("SignUp screen", () => {
  it("should submit the form when all fields are filled correctly", () => {
    const CreateUser = jest.fn();
    const Toast = {
      show: jest.fn()
    };
    const navigation = {
      navigate: jest.fn()
    };
    const useForm = jest.fn().mockReturnValue({
      control: {},
      handleSubmit: jest.fn().mockImplementation((callback) => callback()),
      setError: jest.fn(),
      setValue: jest.fn(),
      formState: { errors: {} }
    });
    const useTheme = jest.fn().mockReturnValue({
      COLORS: {
        GREEN: "green",
        WHITE: "white"
      }
    });

    // Render component
    const { getByText, getByLabelText } = render(
      <MockTheme>
        <MockNavigationContainer>
          <SignUp />
        </MockNavigationContainer>
      </MockTheme>
    );

    // Fill in the input fields
    const nameInput = getByText("Name");
    const emailInput = getByText("Email");
    const passwordInput = getByText("Password");
    const confirmPasswordInput = getByText("Confirm Password");

    fireEvent.changeText(nameInput, { target: { value: "John Doe" } });
    fireEvent.changeText(emailInput, {
      target: { value: "john.doe@example.com" }
    });
    fireEvent.changeText(passwordInput, { target: { value: "password123" } });
    fireEvent.changeText(confirmPasswordInput, {
      target: { value: "password123" }
    });

    // Submit the form
    const signUpButton = getByText("SIGN UP");
    fireEvent.press(signUpButton);

    // Assert that CreateUser function is called with the correct arguments
    jest
      .spyOn(api, "post")
      .mockResolvedValue({ data: mockCreateUserAPIResponse });

    // Assert that Toast.show function is called with the correct arguments
    expect(Toast.show).toHaveBeenCalledWith("User created successfully.", {
      duration: 3000,
      position: 40,
      backgroundColor: "green",
      textColor: "white"
    });

    // Assert that navigation.navigate function is called with the correct argument
    expect(navigation.navigate).toHaveBeenCalledWith("login");
  });

  // it("should call CreateUser with correct parameters when form is submitted", async () => {
  //   render(
  //     <MockTheme>
  //       <MockNavigationContainer>
  //         <SignUp />
  //       </MockNavigationContainer>
  //     </MockTheme>
  //   );

  //   const mockUser = {
  //     name: "John Doe",
  //     email: "johndoe@example.com",
  //     password: "password123"
  //   };

  //   jest.spyOn(api, "post").mockResolvedValue({ data: mockUser });

  //   expect(screen.getByText("User created successfully")).toBeTruthy();

  // fireEvent.changeText(nameInput, name);
  // fireEvent.changeText(emailInput, email);
  // fireEvent.changeText(passwordInput, password);
  // fireEvent.press(submitButton);

  // await waitFor(() => {
  //   expect(CreateUser).({ name, email, password });
  // });
  // });

  //   it("should show success message and navigate to login screen when user is created successfully", async () => {
  //     const { getByTestId, getByText } = render(<SignUp />);

  //     const nameInput = getByTestId("name-input");
  //     const emailInput = getByTestId("email-input");
  //     const passwordInput = getByTestId("password-input");
  //     const submitButton = getByTestId("submit-button");

  //     const name = "John Doe";
  //     const email = "johndoe@example.com";
  //     const password = "password123";

  //     fireEvent.changeText(nameInput, name);
  //     fireEvent.changeText(emailInput, email);
  //     fireEvent.changeText(passwordInput, password);
  //     fireEvent.press(submitButton);

  //     await waitFor(() => {
  //       expect(CreateUser).toHaveBeenCalledWith({ name, email, password });
  //     });

  //     const successMessage = getByText("User created successfully.");
  //     expect(successMessage).toBeTruthy();

  //     const loginScreen = getByTestId("login-screen");
  //     expect(loginScreen).toBeTruthy();
  //   });

  //   it("should show error message when user creation fails", async () => {
  //     const errorMessage = "Unable to create account, try later";
  //     (CreateUser as jest.Mock).mockRejectedValueOnce({ message: errorMessage });

  //     const { getByTestId, getByText } = render(<SignUp />);

  //     const nameInput = getByTestId("name-input");
  //     const emailInput = getByTestId("email-input");
  //     const passwordInput = getByTestId("password-input");
  //     const submitButton = getByTestId("submit-button");

  //     const name = "John Doe";
  //     const email = "johndoe@example.com";
  //     const password = "password123";

  //     fireEvent.changeText(nameInput, name);
  //     fireEvent.changeText(emailInput, email);
  //     fireEvent.changeText(passwordInput, password);
  //     fireEvent.press(submitButton);

  //     await waitFor(() => {
  //       expect(CreateUser).toHaveBeenCalledWith({ name, email, password });
  //     });

  //     const errorText = getByText(errorMessage);
  //     expect(errorText).toBeTruthy();
  //   });
});
