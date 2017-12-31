import { types as ActionTypes } from "./NewRadarActionCreators";

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.showAddRadarDialogue:
      return { ...state, radarName: "", showDialogue: true };
    case ActionTypes.closeAddRadarDialogue:
      return { ...state, showDialogue: false };
    case ActionTypes.updateName:
      return { ...state, radarName: action.value };
    default:
      return state;
  }
};
