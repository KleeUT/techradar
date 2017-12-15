import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/Actions";
// import RadarItem from "./components/RadarItem";
import Button from "./components/button/Button";

import { push } from "react-router-redux";
import propTypes from "prop-types";

const ListDisplay = ({radarId, radarName, radarItems, addItem, editItem, populateState }) => {
  return (
    <div>
      <PrimaryHeading>{radarName}</PrimaryHeading>
      <h2>/Radar</h2>
      {
        radarItems.map(item => <div key={item.key}>{JSON.stringify(item)})</div>)
      }
      <Button onClick={addItem} canClick={true}>Add Item</Button>
      <Button onClick={() => {populateState(radarId)}} canClick={true}>Populate</Button>
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
    addItem: () => dispach(push('/add-item')),
    editItem: (item) => {
      dispach(Actions.EditItem(item));
      dispach(push('/item-details'));
    },
    populateState: (id) => {
      dispach(Actions.AddRadarItem(id,{ name:'test 1', ring:'Adopt', section:'Tools', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem(id,{ name:'test 2', ring:'Adopt', section:'Techniques', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem(id,{ name:'test 3', ring:'Trial', section:'Dancing', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem(id,{ name:'test 4', ring:'Assess', section:'Tools', notes:'some short notes' }, Date.now()))
      dispach(Actions.AddRadarItem(id,{ name:'test 5', ring:'Hold', section:'Tools', notes: "Long Notes:  Lorem ipsizzle dolor sizzle amizzle, consectetizzle yippiyo bling bling. Nullizzle fo shizzle velizzle, aliquet volutpat, shizznit uhuh ... yih!, gravida vizzle, mofo. Pellentesque eget tortor. Sizzle erizzle. Get down get down at dolor the bizzle for sure tempus you son of a bizzle. Maurizzle check it out da bomb et turpizzle. Izzle izzle tortor. Yo pimpin' rhoncizzle nisi. In shizzle my nizzle crocodizzle gizzle platea dictumst. Pimpin' sizzle. Curabitizzle own yo' nizzle, black, mattis break it down, funky fresh vitae, nunc. Yo suscipizzle. Integer sempizzle pot sed own yo'."}, Date.now()))
    }
  };
};

const matchStateToProps = state => {
  let currentRadar = state.radars.get(state.currentRadar) || {}; 
  
  return {
    radarItems: [...(state.radars.get(state.currentRadar) || { items: new Map()}).items]
    .map(x => {return {...x[1], key: x[0]}}),
    radarName: currentRadar.name,
    radarId: state.currentRadar
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
