export const AddRadarItem = (item) => {
    return {
        type: "ADD_RADAR_ITEM",
        value: item
    }
} 

export const UpdateRadarItem = (item) => {
    return {
        type: "UPDATE_RADAR_ITEM",
        value: item
    }
}

export const EditItem = (item) => {
    return {
        type: "EDIT_RADAR_ITEM",
        value: item
    }
}