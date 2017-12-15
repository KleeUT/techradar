export const AddRadarItem = (radarId, item, timestamp) => {
    return {
        type: "ADD_RADAR_ITEM",
        radarId: radarId,
        value: item,
        timestamp: timestamp
    }
} 

export const UpdateRadarItem = (radarId, item, timestamp) => {
    return {
        type: "UPDATE_RADAR_ITEM",
        radarId: radarId,        
        value: item,
        timestamp: timestamp
    }
}

export const EditItem = (radarId, item) => {
    return {
        type: "EDIT_RADAR_ITEM",
        radarId: radarId,                
        value: item
    }
}
//////////////////////////////////////////////
export const AddRadar = (radarId, radar) => {
    return {
        type: "ADD_RADAR",
        radarId: radarId,                
        value: radar
    }
}

export const UpdateRadarName = (radarId, item) => {
    return {
        type: "UPDATE_RADAR_NAME",
        radarId: radarId,                
        value: item
    }
}

export const SelectRadar = (radarId) => {
    return {
        type: "SELECT_RADAR",
        radarId: radarId
    }
}