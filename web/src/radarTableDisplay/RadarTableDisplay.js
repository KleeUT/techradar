import React from "react";
import { connect } from "react-redux";

class RadarTableDisplay extends React.Component {
  render() {
    console.log("render");
    return (
      <div>
        <h1>Radar Table Display</h1>
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return {};
};

const matchSateToProps = state => {
  return {};
};

export default connect(matchSateToProps, matchDispatchToProps)(
  RadarTableDisplay
);
