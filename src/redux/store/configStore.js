import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import buildingReducer from '../reducers/buildingReducer';
import roomReducer from '../reducers/roomReducer';


const configStore = (props) => {

    const store = createStore(combineReducers({
        user: userReducer,
        buildings: buildingReducer,
        rooms: roomReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore