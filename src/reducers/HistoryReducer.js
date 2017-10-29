import * as AppActions from "../actions/Actions";
export default (state = {}, action) => {
  let theNewStatate = { ...state };
  switch (action.type) {
    case AppActions.AddRadarItem().type:
      theNewStatate[action.value.name] = [
        { item: action.value, timestamp: action.timestamp }
      ];
      return theNewStatate;
    case AppActions.UpdateRadarItem().type:
      theNewStatate[action.value.name].push({
        item: action.value,
        timestamp: action.timestamp
      });
      return theNewStatate;
    default:
      return state;
  }
};
