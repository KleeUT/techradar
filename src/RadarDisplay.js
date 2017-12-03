import React from "react";
import { connect } from "react-redux";
import { PrimaryHeading } from "./components/Headings";
import * as Actions from "./actions/Actions";
import RadarItem from "./components/RadarItem";
import Button from "./components/Button";
import RadarNav from './RadarNav';

import { push } from "react-router-redux";
import propTypes from "prop-types";

const ListDisplay = ({ radarItems, addItem, editItem, populateState }) => {
  return (
    <div>
      <RadarNav />      
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
    // addItem: () => dispach(Actions.AddRadarItem({name:`Test Item ${Math.random()}`, section:'testing'}))
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
  return {
    radarItems: Object.keys(state.radarItem).map(key => {
      return { ...state.radarItem[key], key: key };
    })
  };
};

export default connect(matchStateToProps, matchDispachToProps)(ListDisplay);
