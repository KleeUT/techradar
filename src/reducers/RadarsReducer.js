import * as AppActions from '../actions/Actions';
export default (state = new Map(), action) => {
    let newState = state instanceof Map ? new Map(state) : new Map();
    switch(action.type){
        case AppActions.AddRadar().type:
            newState.set(action.value.id, {id: action.value.id, name:action.value.name, items:[]});
            return newState;
        case AppActions.UpdateRadarName().type:
            newState.set(action.value.id, {...newState.get(action.value.id), name: action.value.name})
            return newState;
        default:
            return state;
    }
}