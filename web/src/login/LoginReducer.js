import * as Actions from "./LoginActionsCreator";

export default (state = { user: { isLoggedIn: false } }, action) => {
  switch (action.type) {
    case Actions.Types.Login:
      return {
        ...state,
        user: {
          username: action.username,
          token: action.token,
          isLoggedIn: true
        }
      };
    case Actions.Types.Logout:
      return {
        ...state,
        user: {
          isLoggedIn: false
        }
      };
    default:
      return state;
  }
};
