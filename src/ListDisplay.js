import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/Actions";
import RadarItem from "./components/RadarItem";
import Button from "./components/button/Button";
import { push } from "react-router-redux";
import propTypes from "prop-types";

const ListDisplay = ({ radarItems, addItem, editItem, populateState }) => {
  return (
    <div>
      <PrimaryHeading>List Display</PrimaryHeading>
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
              edit={() => editItem(item)}
            />
          ))}
        </tbody>
      </table>
      <Button onClick={addItem} canClick={true}>Add Item</Button>
    </div>
  );
};

ListDisplay.propTypes = {
  radarItems: propTypes.array,
  addItem: propTypes.func
};

const matchDispachToProps = dispach => {
  return {
    // addItem: () => dispach(Actions.AddRadarItem({name:`Test Item ${Math.random()}`, section:'testing'}))
    addItem: () => dispach(push('/add-item')),
    editItem: (item) => {
      dispach(Actions.EditItem(item));
      dispach(push('/item-details'));
    }
  };
};

const matchStateToProps = state => {
  return {
    radarItems: [...(state.radars.get(state.currentRadar) || { items: new Map()}).items]
    .map(x => {return {...x[1], key: x[0]}}),
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
