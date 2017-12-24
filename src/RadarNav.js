import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { EmptyField, Navigator } from "./util/Colors";
import {
  showDashboard,
  showRadar,
  showListView
} from "./actions/RoutingActionCreator";

const Nav = styled.nav`
  /* background-color: #d6f5d6; */
  background-color: ${Navigator};
  color: ${EmptyField};
  width: 100%;
  height: 2rem;
  display: flex;
`;
const Link = styled.a`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 0 0.1rem 0 0.1rem;
  height: 100%;
  vertical-align: bottom;
  /* background-color: #ze1f3e1; */
  :hover {
    background: ${EmptyField};
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

class RadarNav extends React.Component {
  render() {
    return (
      <Nav>
        <a onClick={() => this.props.navigate(showDashboard())}>
          <Logo src="/radar.svg" />
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
      </Nav>
    );
  }
}

RadarNav.propTypes = {
  navigate: PropTypes.func
};

const matchdispatchToProps = dispatch => {
  return {
    navigate: navigationAction => dispatch(navigationAction)
  };
};
const matchStateToProps = state => {
  return {
    currentPage: state.router.location.pathname,
    hasRadarSelected: !!state.currentRadar
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(RadarNav);
