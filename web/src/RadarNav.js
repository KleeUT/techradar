import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { EmptyField, Navigator } from "./util/Colors";

import { LoginActionsCreator } from "./login";
import {
  showDashboard,
  showRadar,
  showListView,
  showTableView
} from "./actions/RoutingActionCreator";

const Nav = styled.nav`
  background-color: ${Navigator};
  color: ${EmptyField};
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 0 0.1rem 0 0.1rem;
  height: 100%;
  vertical-align: bottom;
  :hover {
    background-color: ${EmptyField};
    color: ${Navigator};
  }
`;

const Logo = styled.img`
  height: 1.75rem;
  width: 1.75rem;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Username = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 0 0.1rem 0 0.1rem;
  height: 100%;
  vertical-align: bottom;
`;

const FillSpace = styled.div`
  flex: 1 0 0;
`;

class RadarNav extends React.Component {
  render() {
    return (
      <Nav>
        <a onClick={() => this.props.navigate(showDashboard())}>
          <Logo src="/radarbw_inverse.svg" />
        </a>
        {this.props.hasRadarSelected ? (
          <Link onClick={() => this.props.navigate(showRadar())}>Radar</Link>
        ) : (
          ""
        )}
        {this.props.hasRadarSelected ? (
          <Link onClick={() => this.props.navigate(showListView())}>List</Link>
        ) : (
          ""
        )}
        {this.props.hasRadarSelected ? (
          <Link onClick={() => this.props.navigate(showTableView())}>
            Table
          </Link>
        ) : (
          ""
        )}
        <FillSpace />
        <Username>{this.props.username}</Username>
        {this.props.isLoggedIn ? (
          <Link onClick={this.props.logout}>logout</Link>
        ) : (
          ""
        )}
      </Nav>
    );
  }
}

RadarNav.propTypes = {
  navigate: PropTypes.func,
  logout: PropTypes.func,
  hasRadarSelected: PropTypes.bool,
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool
};

const matchdispatchToProps = dispatch => {
  return {
    navigate: navigationAction => dispatch(navigationAction),
    logout: () => {
      dispatch(LoginActionsCreator.Logout());
      dispatch(showDashboard());
    }
  };
};

const matchStateToProps = state => {
  return {
    hasRadarSelected: !!state.currentRadar,
    username: state.login.user.isLoggedIn ? state.login.user.username : "",
    isLoggedIn: state.login.user.isLoggedIn
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(RadarNav);
