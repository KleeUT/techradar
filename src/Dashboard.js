import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";

import * as Actions from './actions/Actions';
import * as Colors from './util/Colors'
import Button from "./components/button/Button"

const RadarsList = styled.div`
display:flex;
flex-wrap: wrap;
`

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
    cursor:pointer;
`

class Dashboard extends React.Component {
  render() {
    const radars = this.props.radars
    return (
        <div>
          <h1>Your Radars:</h1>
          <RadarsList>
          {radars.map(x => 
            <a onClick={() => this.props.selectRadar(x[1].id)} key={x[0]}><RadarInstance>{x[1].name}</RadarInstance></a>
          )}
          </RadarsList>
          <Button onClick={this.props.populate}>Populate</Button>
        </div>

    );
  }
}

Dashboard.propTypes = {
  navigate: PropTypes.func,
  populate: PropTypes.func,
  radars: PropTypes.array
};

const matchdispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path)),
    selectRadar: id => {
      dispatch(Actions.SelectRadar(id))
      dispatch(push('/radar'))
    },
    populate: () => {
      dispatch(Actions.AddRadar('id1', {id:'id1', name:'Radar 1'}))
      dispatch(Actions.AddRadar('id2', {id:'id2', name:'Technical Services'}))
      dispatch(Actions.AddRadar('id3', {id:'id3', name:'Radar 3'}))
      dispatch(Actions.AddRadar('id4', {id:'id4', name:'Radar 4'}))
    }
  };
};
const matchStateToProps = state => {
  return {
    radars: [...state.radars]
  };
};

export default connect(matchStateToProps, matchdispatchToProps)(Dashboard);
