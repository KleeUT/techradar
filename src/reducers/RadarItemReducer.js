import * as Actions from "../actions/Actions";
export default (state = {nameo:{
    name: "nameo",
    ring: "assess",
    section: "test",
    notes: "This thing looks pretty cool hey!"
  }}, action) => {
  switch (action.type) {
    case Actions.AddRadarItem().type: {
      const newState = { ...state };
      newState[action.value.name] = action.value;
      return newState;
    }
    default:
      console.log(`ignoring action with type: ${action.type}`);
      return state;
  }
};
