export const Types = {
    Login: 'LOGIN/Login'
}
export const Login = (username, password) => {
    return {
        type: Types.Login,
        username,
        password
    }
}