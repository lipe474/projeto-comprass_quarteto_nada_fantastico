import { act, fireEvent, screen, waitFor } from "@testing-library/react-native";
import { SignUp } from "@screens/SignUp";
import { api } from "@services/api";
import { mockCreateUserAPIResponse } from "../../mocks/api/mockCreateUserAPIResponse";
import * as Navigation from "@react-navigation/native";
import { render } from "../../utils/customRender";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("SignUp screen", () => {
  let props: any;
  beforeEach(() => {
    jest.mock("./api", () => ({
      CreateUser: jest.fn(() => Promise.resolve())
    }));

    jest.mock("@react-navigation/native", () => ({
      useNavigation: jest.fn(() => ({
        navigate: jest.fn()
      }))
    }));
  });
  it("should submit the form when all fields are filled correctly", async () => {
    const { getByText } = render(<SignUp />);

    act(() => {
      fireEvent.changeText(getByText("Name"), "John Doe");
      fireEvent.changeText(getByText("Email"), "john.doe@example.com");
      fireEvent.changeText(getByText("Password"), "password123");
      fireEvent.changeText(getByText("Confirm Password"), "password123");

      const response = jest
        .spyOn(api, "post")
        .mockResolvedValue({ data: mockCreateUserAPIResponse });

      fireEvent.press(getByText("SIGN UP"));

      console.log(response, "response");
      waitFor(() => {
        expect(screen.findByText(/user created/i)).toBeTruthy();
      });
    });
  });

  it("should display an error message when the password is too short", () => {
    const { getByText } = render(<SignUp />);

    act(() => {
      fireEvent.changeText(getByText("Name"), "John Doe");
      fireEvent.changeText(getByText("Email"), "john.doe@example.com");
      fireEvent.changeText(getByText("Password"), "pass");
      fireEvent.changeText(getByText("Confirm Password"), "pass");
      fireEvent.press(getByText("SIGN UP"));
      waitFor(() => {
        expect(getByText(/password must have/i)).toBeTruthy();
        expect(getByText("Password")).toHaveTextContent("");
        expect(getByText("Confirm Password")).toHaveTextContent("");
      });
    });
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
