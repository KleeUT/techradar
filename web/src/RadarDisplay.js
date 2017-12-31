import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/RadarActionsCreator";
import Button from "./components/button/Button";

import {
  showAdditemForm,
  showItemDetailsForm
} from "./actions/RoutingActionCreator";

import propTypes from "prop-types";

const ListDisplay = ({
  radarId,
  radarName,
  radarItems,
  addItem,
  editItem,
  populateState
}) => {
  return (
    <div>
      <PrimaryHeading>{radarName}</PrimaryHeading>
      <h2>/Radar</h2>
      {radarItems.map(item => (
        <div key={item.key}>{JSON.stringify(item)})</div>
      ))}
      <Button onClick={addItem} canClick={true}>
        Add Item
      </Button>
      <Button
        onClick={() => {
          populateState(radarId);
        }}
        canClick={true}
      >
        Populate
      </Button>
    </div>
  );
};

ListDisplay.propTypes = {
  radarItems: propTypes.array,
  addItem: propTypes.func,
  radarName: propTypes.string,
  radarId: propTypes.string
};

const matchDispachToProps = dispach => {
  return {
    addItem: () => dispach(showAdditemForm()),
    editItem: item => {
      dispach(Actions.EditItem(item));
      dispach(showItemDetailsForm);
    },
    populateState: id => {
      dispach(
        Actions.AddRadarItem(
          id,
          "test 1",
          "Adopt",
          "Tools",
          "some short notes",
          Date.now()
        )
      );
      dispach(
        Actions.AddRadarItem(
          id,
          "test 2",
          "Adopt",
          "Techniques",
          "some short notes",
          Date.now()
        )
      );
      dispach(
        Actions.AddRadarItem(
          id,
          "test 3",
          "Trial",
          "Dancing",
          "some short notes",
          Date.now()
        )
      );
      dispach(
        Actions.AddRadarItem(
          id,
          "test 4",
          "Assess",
          "Tools",
          "some short notes",
          Date.now()
        )
      );
      dispach(
        Actions.AddRadarItem(
          id,
          "test 5",
          "Hold",
          "Tools",
          "Long Notes:  Lorem ipsizzle dolor sizzle amizzle, consectetizzle yippiyo bling bling. Nullizzle fo shizzle velizzle, aliquet volutpat, shizznit uhuh ... yih!, gravida vizzle, mofo. Pellentesque eget tortor. Sizzle erizzle. Get down get down at dolor the bizzle for sure tempus you son of a bizzle. Maurizzle check it out da bomb et turpizzle. Izzle izzle tortor. Yo pimpin' rhoncizzle nisi. In shizzle my nizzle crocodizzle gizzle platea dictumst. Pimpin' sizzle. Curabitizzle own yo' nizzle, black, mattis break it down, funky fresh vitae, nunc. Yo suscipizzle. Integer sempizzle pot sed own yo'.",
          Date.now()
        )
      );
    }
  };
};

const matchStateToProps = state => {
  let currentRadar = state.radars[state.currentRadar] || {};

  return {
    radarItems: Object.keys((currentRadar || { items: {} }).items)
      .map(x => currentRadar.items[x])
      .filter(x => x !== undefined),
    radarName: currentRadar.name,
    radarId: state.currentRadar
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
