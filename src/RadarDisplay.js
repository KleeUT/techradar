import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/Actions";
import RadarItem from "./components/RadarItem";
import Button from "./components/Button";
import { push } from "react-router-redux";
import propTypes from "prop-types";

const RadarDisplay = ({ radarItems, addItem, editItem }) => {
  return (
    <div>
      <PrimaryHeading>Radar Display</PrimaryHeading>
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
      <Button onClick={addItem}>Add Item</Button>
    </div>
  );
};

RadarDisplay.propTypes = {
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
    radarItems: Object.keys(state.radarItem).map(key => {
      return { ...state.radarItem[key], key: key };
    })
  };
};

export default connect(matchStateToProps, matchDispachToProps)(RadarDisplay);
