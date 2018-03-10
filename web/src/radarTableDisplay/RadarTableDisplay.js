import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as Colors from "../util/Colors";
import { sortedRings } from "../util/RingConstants";
class RadarGridDisplay extends React.Component {
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.props.radarName}</h1>
        {this.props.rings.map(ring => {
          return (
            <RingView
              ring={ring.name}
              items={this.props.radarByRing[ring.name]}
            />
          );
        })}
        {/* <RingView ring="Adopt" items={this.props.radarByRing.Adopt} /> */}
        {/* <RingView ring="Trial" items={this.props.radarByRing.Trial} /> */}
        {/* <RingView ring="Assess" items={this.props.radarByRing.Assess} /> */}
        {/* <RingView ring="Hold" items={this.props.radarByRing.Hold} /> */}
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return {};
};

const matchStateToProps = state => {
  let currentRadar = state.radars[state.currentRadar] || { items: {} };
  let radarKeys = Object.keys(currentRadar.items);

  return {
    radarByRing: breakRadarIntoRings(currentRadar),
    radarItems: Object.keys(currentRadar.items)
      .map(x => currentRadar.items[x])
      .filter(x => x !== undefined),
    radarName: currentRadar.name,
    radarId: state.currentRadar,
    rings: sortedRings()
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(
  RadarGridDisplay
);

function breakRadarIntoRings(radar) {
  let radarKeys = Object.keys(radar.items);
  let ringed = radarKeys.reduce(
    (p, c) => {
      if (radar.items[c]) {
        p[radar.items[c].ring].push(radar.items[c]);
      }
      return p;
    },
    sortedRings().reduce((p, c) => {
      p[c.name] = [];
      return p;
    }, {})
  );
  return ringed;
}

const ItemBox = styled.div`
  padding: 0.5rem;
  grid-column: auto;
  background-color: ${Colors.ActiveDutyGreen};
`;
const RingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 1em;
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

const RingItemTitle = styled.h2``;

const RadarItemTitle = styled.h3`
  text-align: center;
`;
const RingView = ({ ring, items }) => {
  return (
    <div>
      <RingItemTitle>{ring}</RingItemTitle>
      <RingContainer>
        {items.map(item => {
          return (
            <ItemBox>
              <RadarItemTitle>{item.name}</RadarItemTitle>
              <p>{item.section}</p>
            </ItemBox>
          );
        })}
      </RingContainer>
    </div>
  );
};
