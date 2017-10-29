export const AddRadarItem = (item, timestamp) => {
    return {
        type: "ADD_RADAR_ITEM",
        value: item,
        timestamp: timestamp
    }
} 

export const UpdateRadarItem = (item, timestamp) => {
    return {
        type: "UPDATE_RADAR_ITEM",
        value: item,
        timestamp: timestamp
    }
}

export const EditItem = (item) => {
    return {
        type: "EDIT_RADAR_ITEM",
        value: item
    }
}