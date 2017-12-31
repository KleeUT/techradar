export const types = {
  showAddRadarDialogue: "addRadarView/showAddRadarDialogue",
  closeAddRadarDialogue: "addRadarView/closeAddRadarDialogue",
  updateName: "addRadarView/updateName"
};

export const showAddRadarDialogue = () => {
  return {
    type: types.showAddRadarDialogue
  };
};

export const closeAddRadarDialogue = () => {
  return {
    type: types.closeAddRadarDialogue
  };
};

export const updateName = name => {
  return {
    type: types.updateName,
    value: name
  };
};
