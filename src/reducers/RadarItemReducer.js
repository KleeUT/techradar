import * as Actions from "../actions/Actions";
export default (state = {}, action) => {
  switch (action.type) {
    case Actions.AddRadarItem().type:
      return upsertItem(state, action.value);
    case Actions.UpdateRadarItem().type:
      return upsertItem(state, action.value);
    default:
      return state;
  }
};

function upsertItem(state, item) {
  const newState = { ...state };
  newState[item.name] = item;
  return newState;
}
