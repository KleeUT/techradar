import { types } from "../actions/RadarActionsCreator";
import RadarItemReducer from "./RadarItemReducer";
export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case types.addRadar:
      newState = { ...state };
      newState[action.radarId] = {
        id: action.radarId,
        name: action.radarName,
        items: {}
      };
      return newState;
    case types.addRadarItem:
      newState = { ...state };
      const oldRadar = newState[action.radarId] || {};
      const newItems = RadarItemReducer(oldRadar.items, action);
      newState[action.radarId] = { ...oldRadar, items: newItems };
      return newState;
    default:
      return state;
  }
};
