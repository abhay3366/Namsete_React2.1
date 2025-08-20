import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/appStore";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  MemoryRouter: ({ children }) => <div>{children}</div>,
}));

test("loads Header component", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

  //   check login btn
  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();

  //   check cart
  const cartBtn = screen.getByText(/Cart/i);
  expect(cartBtn).toBeInTheDocument();
});

test("should render header component with login button", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </MemoryRouter>
  );
  const loginButton=screen.getByRole("button",{btnName:"login"})
  fireEvent.click(loginButton)
   const logoutButton=screen.getByRole("button",{btnName:"logout"})
  fireEvent.click(logoutButton)
});
