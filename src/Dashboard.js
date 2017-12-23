import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import * as RadarActionsCreator from "./actions/RadarActionsCreator";
import { showRadar } from "./actions/RoutingActionCreator";
import * as Colors from "./util/Colors";
import Button from "./components/button/Button";

const RadarsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RadarInstance = styled.div`
  width: 10rem;
  height: 7rem;
  margin: 0.25rem;
  background-image: url(/radar.svg);

  background-repeat: no-repeat;
  background-attachment: local;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.ActiveDutyGreen};
  color: ${Colors.EmptyField};
  font-weight: bolder;
  cursor: pointer;
`;

class Dashboard extends React.Component {
  render() {
    const radars = this.props.radars;
    return (
      <div>
        <h1>Your Radars:</h1>
        <RadarsList>
          {radars.map(x => (
            <a onClick={() => this.props.selectRadar(x[1].id)} key={x[0]}>
              <RadarInstance>{x[1].name}</RadarInstance>
            </a>
          ))}
        </RadarsList>
        <Button onClick={this.props.populate}>Populate</Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  populate: PropTypes.func,
  radars: PropTypes.array
};

const matchdispatchToProps = dispatch => {
  return {
    selectRadar: id => {
      dispatch(RadarActionsCreator.SelectRadar(id));
      dispatch(showRadar());
    },
    populate: () => {
      dispatch(
        RadarActionsCreator.AddRadar("id1", { id: "id1", name: "Radar 1" })
      );
      dispatch(
        RadarActionsCreator.AddRadar("id2", {
          id: "id2",
          name: "Technical Services"
        })
      );
      dispatch(
        RadarActionsCreator.AddRadar("id3", { id: "id3", name: "Radar 3" })
      );
      dispatch(
        RadarActionsCreator.AddRadar("id4", { id: "id4", name: "Radar 4" })
      );
    }
  };
};
const matchStateToProps = state => {
  return {
    radars: Object.keys(state.radars).map(key => [key, state.radars[key]])
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(Dashboard);
