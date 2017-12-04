import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h1>Dashboard</h1>
    );
  }
}

Dashboard.propTypes = {
  navigate: PropTypes.func
};

const matchdispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path))
  };
};
const matchStateToProps = state => {
  return {
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(Dashboard);
