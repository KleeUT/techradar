export const UpdateName = value => {
  return {
    type: "@@AddItemForm/UpdateName",
    value: value
  };
};

export const UpdateRing = value => {
  return {
    type: "@@AddItemForm/UpdateRing",
    value: value
  };
};

export const UpdateSection = value => {
  return {
    type: "@@AddItemForm/UpdateSection",
    value: value
  };
};

export const UpdateNotes = value => {
  return {
    type: "@@AddItemForm/UpdateNotes",
    value: value
  };
};

export const ClearForm = {
  type: "@@AddItemForm/ClearForm",
};
