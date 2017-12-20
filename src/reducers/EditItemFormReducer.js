import * as Actions from "../actions/EditItemFormActions";
import * as AppActions from "../actions/RadarActionsCreator";

const EditItemReducer = (
  state = {
    name: "",
    ring: "",
    section: "",
    notes: ""
  },
  action
) => {
  switch (action.type) {
    case AppActions.EditItem().type:
      return { ...state, ...action.value };
    case Actions.UpdateName().type:
      return { ...state, name: action.value };

    case Actions.UpdateRing().type:
      return { ...state, ring: action.value };

    case Actions.UpdateSection().type:
      return { ...state, section: action.value };

    case Actions.UpdateNotes().type:
      return { ...state, notes: action.value };
    case Actions.ClearForm.type: {
      return {
        name: "",
        ring: "",
        section: "",
        notes: ""
      };
    }
    default:
      return state;
  }
};

export default EditItemReducer;
