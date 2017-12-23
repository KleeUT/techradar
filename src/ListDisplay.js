import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading, SecondaryHeading } from "./components/Headings";
import * as Actions from "./actions/RadarActionsCreator";
import RadarItem from "./components/RadarItem";
import Button from "./components/button/Button";
import { push } from "react-router-redux";
import propTypes from "prop-types";

const ListDisplay = ({
  radarItems,
  radarName,
  radarId,
  addItem,
  editItem,
  populateState
}) => {
  return (
    <div>
      <PrimaryHeading>radarName</PrimaryHeading>
      <SecondaryHeading>List Display</SecondaryHeading>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Section</th>
            <th>Ring</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {radarItems.map(item => (
            <RadarItem
              key={item.key}
              name={item.name}
              section={item.section}
              ring={item.ring}
              notes={item.notes}
              edit={() => editItem(radarId, item)}
            />
          ))}
        </tbody>
      </table>
      <Button onClick={addItem} canClick={true}>
        Add Item
      </Button>
    </div>
  );
};

ListDisplay.propTypes = {
  radarItems: propTypes.array,
  radarName: propTypes.string,
  radarId: propTypes.string,
  addItem: propTypes.func
};

const matchDispachToProps = dispach => {
  return {
    addItem: () => dispach(push("/add-item")),
    editItem: (radarId, item) => {
      dispach(Actions.EditItem(radarId, item));
      dispach(push("/item-details"));
    }
  };
};

const matchStateToProps = state => {
  const currentRadar = state.radars[state.currentRadar];
  return {
    radarItems: Object.keys((currentRadar || { items: {} }).items)
      .map(x => currentRadar.items[x])
      .filter(x => x !== undefined),
    radarName: currentRadar.name,
    radarId: state.currentRadar
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
