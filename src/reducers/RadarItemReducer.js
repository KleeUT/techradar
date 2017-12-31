import * as Actions from "../actions/RadarActionsCreator";
export default (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case Actions.AddRadarItem().type:
      newState[action.value.name] = action.value;
      return newState;
    case Actions.UpdateRadarItem().type:
      newState[action.value.name] = action.value;
      return newState;
    default:
      return state;
  }
};
