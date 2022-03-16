const initalValue = []

const userReducer = (state = initalValue,action)=>{
    switch(action.type){
        case 'ADD_USER':{
            return state
        }

        default : return state
    }
}

export default userReducer;