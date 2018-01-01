import LoginReducer from "./LoginReducer";
import { Login, Logout } from "./LoginActionsCreator";

const someToken = "12345jwt";
const username = "Teapot 1";

describe("Login Reducer: ", () => {
  it("Should return default state for unknown action", () => {
    const newState = LoginReducer(undefined, "Some action");
    expect(newState).toEqual({
      user: { isLoggedIn: false }
    });
  });

  it("Should set username and token on login", () => {
    const newState = LoginReducer({}, Login(username, someToken));
    expect(newState).toEqual({
      user: { isLoggedIn: true, username: username, token: someToken }
    });
  });

  it("Should remove user information on logout", () => {
    const newState = LoginReducer(
      {
        user: { isLoggedIn: true, username: username, token: someToken }
      },
      Logout()
    );

    expect(newState).toEqual({
      user: { isLoggedIn: false }
    });
  });
});
