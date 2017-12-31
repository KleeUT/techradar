import uuidv4 from "uuid/v4";

export const types = {
  addRadarItem: "ADD_RADAR_ITEM",
  updateRadarItem: "UPDATE_RADAR_ITEM",
  editRadaritem: "EDIT_RADAR_ITEM",
  addRadar: "ADD_RADAR",
  updateRadaName: "UPDATE_RADAR_NAME",
  selectRadar: "SELECT_RADAR"
};
export const AddRadarItem = (
  radarId,
  name,
  ring,
  section,
  notes,
  timestamp
) => {
  return {
    type: types.addRadarItem,
    radarId: radarId,
    value: { name, ring, section, notes, key: name },
    timestamp: timestamp
  };
};

export const UpdateRadarItem = (radarId, updatedItem, timestamp) => {
  return {
    type: types.updateRadarItem,
    radarId: radarId,
    value: updatedItem,
    timestamp: timestamp
  };
};

export const EditItem = (radarId, item) => {
  return {
    type: types.editRadaritem,
    radarId: radarId,
    value: item
  };
};
///////////////////Radar Actions///////////////////////////
export const AddRadar = radar => {
  return {
    type: types.addRadar,
    radarId: uuidv4(),
    radarName: radar
  };
};

export const UpdateRadarName = (radarId, item) => {
  return {
    type: types.updateRadarName,
    radarId: radarId,
    value: item
  };
};

export const SelectRadar = radarId => {
  return {
    type: types.selectRadar,
    radarId: radarId
  };
};
