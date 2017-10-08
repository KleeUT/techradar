import React from 'react';
import {connect} from 'react-redux';
import {PrimaryHeading} from './components/Headings';
import * as Actions from './actions/Actions';
import RadarItem from './components/RadarItem';
import Button from './components/Button';

const Component =  ({radarItems, addItem}) => {
    return [
        <ul>
            <PrimaryHeading>Radar Display</PrimaryHeading>
            {radarItems.map((item) => {
                return (
                    <li key={item.name}>
                    <RadarItem name={item.name} section={item.section} ring={item.ring} notes={item.notes} />
                    </li>
                    
                )
            })}
            </ul>,
            <Button onClick={addItem}>Add Item</Button>
        ]
}

const matchDispachToProps = (dispach) => {
    return {
        addItem: () => dispach(Actions.AddRadarItem({name:`Test Item ${Math.random()}`, section:'testing'}))
    }
}

const matchStateToProps = (state) => {
    return {
        radarItems: Object.keys(state.radarItem).map(key => state.radarItem[key])
    }
}

export default connect(matchStateToProps, matchDispachToProps)(Component);