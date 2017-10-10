import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import propTypes from "prop-types";

import Button from "./components/Button";

const AddItem = ({ submit, cancel }) => {
  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={submit}>
        <Button onClick={submit}>Ok</Button>
      </form>
    </div>
  );
};

AddItem.propTypes = {
  submit: propTypes.func,
  cancel: propTypes.func
};

const matchDispachToProps = dispach => {
  return {
    submit: () => dispach(push('')),
    cancel: () => dispach(push(''))
  };
};
const matchStateToProps = state => {
  return {};
};

export default connect(matchStateToProps, matchDispachToProps)(AddItem);
