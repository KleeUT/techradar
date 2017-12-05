export const AddRadarItem = (radarId, item, timestamp) => {
    return {
        type: "ADD_RADAR_ITEM",
        radarid: radarId,
        value: item,
        timestamp: timestamp
    }
} 

export const UpdateRadarItem = (radarId, item, timestamp) => {
    return {
        type: "UPDATE_RADAR_ITEM",
        radarid: radarId,        
        value: item,
        timestamp: timestamp
    }
}

export const EditItem = (radarId, item) => {
    return {
        type: "EDIT_RADAR_ITEM",
        radarid: radarId,                
        value: item
    }
}
//////////////////////////////////////////////
export const AddRadar = (radarId, radar) => {
    return {
        type: "ADD_RADAR",
        radarid: radarId,                
        value: radar
    }
}

export const UpdateRadarName = (radarId, item) => {
    return {
        type: "UPDATE_RADAR_NAME",
        radarid: radarId,                
        value: item
    }
}