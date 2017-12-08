import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/Actions";
// import RadarItem from "./components/RadarItem";
import Button from "./components/Button";

import { push } from "react-router-redux";
import propTypes from "prop-types";

const ListDisplay = ({ radarName, radarItems, addItem, editItem, populateState }) => {
  return (
    <div>
      <PrimaryHeading>{radarName}</PrimaryHeading>
      <h2>/Radar</h2>
      <Button onClick={addItem} canClick={true}>Add Item</Button>
      <Button onClick={populateState} canClick={true}>Populate</Button>
    </div>
  );
};

ListDisplay.propTypes = {
  radarItems: propTypes.array,
  addItem: propTypes.func
};

const matchDispachToProps = dispach => {
  return {
    addItem: () => dispach(push('/add-item')),
    editItem: (item) => {
      dispach(Actions.EditItem(item));
      dispach(push('/item-details'));
    },
    populateState: () => {
      dispach(Actions.AddRadarItem({ name:'test 1', ring:'Adopt', section:'Tools', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem({ name:'test 2', ring:'Adopt', section:'Techniques', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem({ name:'test 3', ring:'Trial', section:'Dancing', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem({ name:'test 4', ring:'Assess', section:'Tools', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem({ name:'test 5', ring:'Hold', section:'Tools', notes: "Long Notes:  Lorem ipsizzle dolor sizzle amizzle, consectetizzle yippiyo bling bling. Nullizzle fo shizzle velizzle, aliquet volutpat, shizznit uhuh ... yih!, gravida vizzle, mofo. Pellentesque eget tortor. Sizzle erizzle. Get down get down at dolor the bizzle for sure tempus you son of a bizzle. Maurizzle check it out da bomb et turpizzle. Izzle izzle tortor. Yo pimpin' rhoncizzle nisi. In shizzle my nizzle crocodizzle gizzle platea dictumst. Pimpin' sizzle. Curabitizzle own yo' nizzle, black, mattis break it down, funky fresh vitae, nunc. Yo suscipizzle. Integer sempizzle pot sed own yo'."}, Date.now()))
    }
  };
};

const matchStateToProps = state => {
  let currentRadar = state.radars.get(state.currentRadar) || {}; 
  
  return {
    radarItems: Object.keys(state.radarItem).map(key => {
      return { ...state.radarItem[key], key: key };
    }),
    radarName: currentRadar.name,
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
