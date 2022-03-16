const initialValue = [];

const buildingReducer = (state=initialValue,action)=>{
    switch(action.type){
        case 'GET_BUILDING':{
            return [...action.payload];
        }

        case 'GET_SINGLE_BUILDING': {
            return state.filter((ele) => ele._id === action.payload._id);
        }
        case 'ADD_BUILDING':{
            return [...state, action.payload];
        }

        case 'DELETE_BUILDING':{
            return  state.filter((ele)=>ele._id !== action.payload._id);
        }
        default : return [...state];
    }
}

export default buildingReducer