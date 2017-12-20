import * as AppActions from "../actions/RadarActionsCreator";
import RadarItemReducer from "./RadarItemReducer";
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case AppActions.AddRadar().type:
      newState = { ...state };
      newState[action.radarId] = {
        id: action.value.id,
        name: action.value.name,
        items: {}
      };
      return newState;
    case AppActions.UpdateRadarName().type:
      newState = { ...state };
      newState[action.radarId] = {
        ...newState[action.radarId],
        name: action.value.name
      };
      return newState;
    case AppActions.AddRadarItem().type:
      newState = { ...state };
      const oldRadar = newState[action.radarId] || {};
      const newItems = RadarItemReducer(oldRadar.items, action);
      newState[action.radarId] = { ...oldRadar, items: newItems };
      return newState;
    default:
      return state;
  }
};
