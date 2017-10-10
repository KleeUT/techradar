import * as Actions from "../actions/Actions";
export default (state = {}, action) => {
  switch (action.type) {
    case Actions.AddRadarItem().type: {
      const newState = { ...state };
      newState[action.value.name] = action.value;
      return newState;
    }
    default:
      return state;
  }
};
