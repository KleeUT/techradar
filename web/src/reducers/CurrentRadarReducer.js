import * as Actions from '../actions/RadarActionsCreator';
export default (state = "", action) => {
    if(action.type === Actions.SelectRadar().type){
        return action.radarId;
    }
    return state;
}