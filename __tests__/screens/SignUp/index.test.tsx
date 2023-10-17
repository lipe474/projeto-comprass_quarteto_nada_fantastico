// import { act, fireEvent, screen, waitFor } from "@testing-library/react-native";
// import { SignUp } from "@screens/SignUp";
// import { api } from "@services/api";
// import { mockCreateUserAPIResponse } from "../../mocks/api/mockCreateUserAPIResponse";
// import * as Navigation from "@react-navigation/native";
// import { render } from "../../utils/customRender";

// describe("SignUp screen", () => {
//   it("should display an error message when the password is too short", () => {
//     const { getByText } = render(<SignUp />);

//     act(() => {
//       fireEvent.changeText(getByText("Name"), "John Doe");
//       fireEvent.changeText(getByText("Email"), "john.doe@example.com");
//       fireEvent.changeText(getByText("Password"), "pass");
//       fireEvent.changeText(getByText("Confirm Password"), "pass");
//       fireEvent.press(getByText("SIGN UP"));
//       waitFor(() => {
//         expect(getByText(/password must have/i)).toBeTruthy();
//         expect(getByText("Password")).toHaveTextContent("");
//         expect(getByText("Confirm Password")).toHaveTextContent("");
//       });
//     });
//   });
// });

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

  it("should display an error message when CreateUser throws an error", async () => {
    const mockError = new Error("Unable to create account, try later");
    jest.spyOn(api, "post").mockRejectedValue(mockError);

    const { getByText } = render(<SignUp />);

    act(() => {
      fireEvent.changeText(getByText("Name"), "John Doe");
      fireEvent.changeText(getByText("Email"), "john.doe@example.com");
      fireEvent.changeText(getByText("Password"), "password");
      fireEvent.changeText(getByText("Confirm Password"), "password");
      fireEvent.press(getByText("SIGN UP"));
      waitFor(() => {
        expect(getByText(/unable to create/i)).toBeTruthy();
      });
    });
  });
});
