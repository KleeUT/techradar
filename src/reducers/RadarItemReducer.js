import * as Actions from "../actions/Actions";
export default (state = {}, action) => {
  let newState = {...state};
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

function upsertItem(state, item) {
  const newState = { ...state };
  newState[item.name] = item;
  return newState;
}
