export const Types = {
  Login: "LOGIN/Login",
  Logout: "LOGIN/Logout"
};

export const Login = (username, token) => {
  return {
    type: Types.Login,
    username,
    token
  };
};

export const Logout = () => {
  return {
    type: Types.Logout
  };
};
