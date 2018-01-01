import LoginReducer from "./LoginFormReducer";

describe("Login Form Reducer: ", () => {
  it("Should return default state for unknown action", () => {
    const newState = LoginReducer(undefined, "Some action");
    expect(newState).toEqual({});
  });
});
