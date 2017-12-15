import * as AppActions from '../actions/Actions';
import RadarItemReducer from './RadarItemReducer';
export default (state = new Map(), action) => {
    let newState = state instanceof Map ? new Map(state) : new Map();
    switch(action.type){
        case AppActions.AddRadar().type:
            newState.set(action.value.id, {id: action.value.id, name:action.value.name, items:new Map()});
            return newState;
        case AppActions.UpdateRadarName().type:
            newState.set(action.value.id, {...newState.get(action.value.id), name: action.value.name})
            return newState;
        case AppActions.AddRadarItem().type:
            const oldRadar = newState.get(action.radarId) || { items: new Map() };
            const newItems = RadarItemReducer(oldRadar.items, action);
            newState.set(action.radarId, {... oldRadar, items: newItems});
            return newState;
        default:
            return newState;
    }
}