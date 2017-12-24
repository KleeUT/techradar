import React from "react";
import { connect } from "react-redux";
import { showDashboard } from "../actions/RoutingActionCreator";

class NeedsARadarSelectedWrapper extends React.Component {
  componentWillMount() {
    if (this.props.noRadarSelected) {
      this.props.goHome();
    }
  }
  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => {
  return {
    noRadarSelected: !state.currentRadar,
    path: state.router.location.pathname
  };
};
const mapDispatchToProps = dispatch => {
  return {
    goHome: () => {
      dispatch(showDashboard());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  NeedsARadarSelectedWrapper
);
