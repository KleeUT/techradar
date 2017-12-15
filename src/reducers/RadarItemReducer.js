import * as Actions from "../actions/Actions";
export default (state, action) => {
  let newState = state instanceof Map ? new Map(state) : new Map();
  switch (action.type) {
    case Actions.AddRadarItem().type:
      return newState.set(action.value.name, action.value);

    case Actions.UpdateRadarItem().type:
      console.log("fadsfsafsdfsafasd");
      return newState.set(action.value.name, action.value);

    default:
      return state;
  }
};

function upsertItem(state, item) {
  const newState = { ...state };
  newState[item.name] = item;
  return newState;
}
