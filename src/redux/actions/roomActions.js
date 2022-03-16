import axios from "axios";



// GET ALL ROOMS OF SPECIFIC BUILDING


const getSpecificBuildingRooms = (data) => {
    return {
        type: 'GET_SPECIFIC_BUILDING_ROOMS',
        payload: data
    }
}

export const roomSpecificBuildingGetAction = (buildingId) => {
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.get(`http://localhost:3700/pg/building/${buildingId}/rooms`, {
                    headers: {
                        'x-auth': localStorage.getItem('token')
                    }
                });
                dispatch(getSpecificBuildingRooms(response.data));
            } catch (err) {
                console.log('rooms of specific building err', err)
            }
        }
        apiCall();
    }
}


// POST ROOM

const postRoom = (data) => {
    return {
        type: 'ADD_ROOM',
        payload: data
    }
}

export const roomPostAction = (room, props) => {
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.post(`http://localhost:3700/pg/building/${room.buildingId}/rooms`, room, {
                    headers: {
                        'x-auth': `${localStorage.getItem('token')}`
                    }
                });
                console.log('here room post', response.data)
                dispatch(postRoom(response.data));
                alert('room added successfully');
                props.history.push(`/building/${room.buildingId}/rooms`);
            } catch (err) {
                console.log('post room err', err);
            }
        }
        apiCall();
    }
}


// DELETE ROOM OF SPECIFIC BUILDING

const deleteRoom = (data) => {
    return {
        type: 'DELETE_SPECIFIC_BUILDING_ROOMS',
        payload: data
    }
}

export const roomDeleteAction = (buildingId, roomId) => {
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.delete(`http://localhost:3700/pg/building/${buildingId}/room/${roomId}`, {
                    headers: {
                        'x-auth': `${localStorage.getItem('token')}`
                    }
                });
                dispatch(deleteRoom(response.data));
                alert('room deleted successfully');
            } catch (err) {
                console.log('delete room err', err)
            }
        }
        apiCall();
    }
}


// EDIT ROOM OF SPECIFIC BUILDING


const editRoom = (data) => {
    return {
        type: 'EDIT_SPECIFIC_BUILDING_ROOMS',
        payload: data
    }
}


export const roomEditAction = (room, props) => {
    return (dispatch) => {
        const apiCall = async () => {
            try {
                const response = await axios.put(`http://localhost:3700/pg/building/${room.buildingId}/room/${room._id}`, room, {
                    headers: {
                        'x-auth': `${localStorage.getItem('token')}`
                    }
                })
                dispatch(editRoom(response.data));
                alert('updated successfully');
                props.history.push(`/building/${room.buildingId}/rooms`);
            } catch (err) {
                console.log('edit room err', err);
            }
        }
        apiCall();
    }
}