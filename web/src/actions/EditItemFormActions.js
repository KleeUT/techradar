export const UpdateName = value => {
  return {
    type: "@@EditItemForm/UpdateName",
    value: value
  };
};

export const UpdateRing = value => {
  return {
    type: "@@EditItemForm/UpdateRing",
    value: value
  };
};

export const UpdateSection = value => {
  return {
    type: "@@EditItemForm/UpdateSection",
    value: value
  };
};

export const UpdateNotes = value => {
  return {
    type: "@@EditItemForm/UpdateNotes",
    value: value
  };
};

export const ClearForm = {
  type: "@@EditItemForm/ClearForm",
};
