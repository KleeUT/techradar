import * as Actions from '../actions/Actions';
export default (state = "", action) => {
    if(action.type === Actions.SelectRadar().type){
        return action.radarId;
    }
    return state;
}