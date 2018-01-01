import React from "react";
import { connect } from "react-redux";
import { Button, TextInput } from "../components";

import { Login } from "./LoginActionsCreator";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <TextInput label="Username: " />
        <TextInput label="Password: " />
        <Button onClick={this.props.onLogin}>Login</Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch(Login("Test usr", "Test password"))
  };
};
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
