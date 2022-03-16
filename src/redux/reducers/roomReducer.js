const initialValue = [];

const roomReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'ADD_ROOM': {
            return [...state, action.payload];
        }
        case 'GET_SPECIFIC_BUILDING_ROOMS': {
            return [...action.payload];
        }

        case 'DELETE_SPECIFIC_BUILDING_ROOMS':{
            return state.filter((room) => room._id !== action.payload._id);
        }
        default: return [...state];
    }
}

export default roomReducer;