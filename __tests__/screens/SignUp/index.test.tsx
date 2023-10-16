import {
  act,
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
import * as Navigation from "@react-navigation/native";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("SignUp screen", () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  it("should submit the form when all fields are filled correctly", async () => {
    // const CreateUser = jest.fn();
    // const Toast = {
    //   show: jest.fn()
    // };
    // const mockedNavigate = jest.fn();

    // jest.mock("@react-navigation/native", () => ({
    //   useNavigation: () => ({ navigate: mockedNavigate })
    // }));
    const navigation = {
      navigate: jest.fn()
    };
    // const useForm = jest.fn().mockReturnValue({
    //   control: {},
    //   handleSubmit: jest.fn().mockImplementation((callback) => callback()),
    //   setError: jest.fn(),
    //   setValue: jest.fn(),
    //   formState: { errors: {} }
    // });
    // const useTheme = jest.fn().mockReturnValue({
    //   COLORS: {
    //     GREEN: "green",
    //     WHITE: "white"
    //   }
    // });

    const { getByText } = render(
      <MockTheme>
        <MockNavigationContainer>
          <SignUp />
        </MockNavigationContainer>
      </MockTheme>
    );

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

    const response = jest
      .spyOn(api, "post")
      .mockResolvedValue({ data: mockCreateUserAPIResponse });

    const signUpButton = getByText("SIGN UP");
    fireEvent.press(signUpButton);

    console.log(response, "response");

    // const userCreated = screen.findByText(/user created successfully/i);

    // expect(userCreated).toBeTruthy();

    // expect(navigation.navigate("login")).toHaveBeenCalledWith("login");
  });

  it("should display an error message when the name contains special characters", async () => {
    const { getByText } = render(
      <MockTheme>
        <MockNavigationContainer>
          <SignUp />
        </MockNavigationContainer>
      </MockTheme>
    );

    fireEvent.changeText(getByText("Name"), "John@Doe");
    fireEvent.changeText(getByText("Email"), "john.doe@example.com");
    fireEvent.changeText(getByText("Password"), "password");
    fireEvent.changeText(getByText("Confirm Password"), "");

    fireEvent.press(getByText("SIGN UP"));

    const errorMessage = await waitFor(() =>
      screen.findByText(/please complete/i)
    );

    expect(errorMessage).toBeTruthy();
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
