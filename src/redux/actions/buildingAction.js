import axios from "axios";

// GET ALL BUILDINGS

const getBuilding = (data) => {
    return{
        type: 'GET_BUILDING',
        payload: data
    }
}


export const buildingGetAction = ()=>{
    return(dispatch)=>{
        const apiCall = async()=>{
           try{
                const response = await axios.get('http://localhost:3700/pg/buildings',{
                    headers :{
                        'x-auth' : `${localStorage.getItem('token')}`
                    }
                })
                dispatch(getBuilding(response.data))
           }catch(err){
               console.log('err',err)
           }
        }
        apiCall()
    }
}


// GET SINGLE BUILDING


// const getSingleBuilding = (data) => {
//     return {
//         type : 'GET_SINGLE_BUILDING',
//         payload : data
//     }
// }

// export const buildingGetSingleAction = (id,props) => {
//     console.log(id)
//     return (dispatch) => {
//         const apiCall = async () => {
//             try{
//                 const response = await axios.get(`http://localhost:3700/pg/buildings/${id}`,{
//                     headers :{
//                         'x-auth' : `${localStorage.getItem('token')}`
//                     }
//                 });
//                 console.log('single building get',response.data);
//                 dispatch(getSingleBuilding(response.data));
//             }catch(err){
//                 console.log('buiilding single get', err);
//             }
//         }
//         apiCall()
//     }
// }

// POST BUILDING

const postBuilding = (data)=>{
    return {
        type: 'ADD_BUILDING',
        payload: data
    }
}

export const buildingPostAction = (buildings,props) =>{
    return (dispatch)=>{
        const apiCall = async()=>{
            try{
                const response = await axios.post('http://localhost:3700/pg/buildings', buildings,{
                    headers :{
                        'x-auth' : `${localStorage.getItem('token')}`
                    }
                });
                postBuilding(response.data)
                alert('building added successfully')
                props.history.push('/buildings')
            }catch(err){
                console.log('building post err',err);
            }
        }
        apiCall()
    }
}


// EDIT BUILDING

const editBuilding = (data) => {
    return {
        type : 'EDIT_BUILDING',
        payload : data
    }
}

export const buildingEditAction = (building, props) => {
    return(dispatch)=>{
        const apiCall = async () => {
            try{
                const response = await axios.put(`http://localhost:3700/pg/buildings/${building._id}`, building, {
                    headers:{
                        'x-auth': `${localStorage.getItem('token')}`
                    }
                });
                dispatch(editBuilding(response.data));
                alert('update successfull');
                props.history.push('/buildings')
            }catch(err){
                console.log('building edit err',err)
            }
        }
        apiCall()
     }
}


// DELETE BUILDING

const deleteBuilding = (data) => {
    return{
        type : 'DELETE_BUILDING',
        payload : data
    }
}


export const buildingDeleteAction = (id) => {
    return(dispatch)=>{
        const apiCall = async () =>{
            try{
                const response = await axios.delete(`http://localhost:3700/pg/buildings/${id}`,{
                    headers:{
                        'x-auth': `${localStorage.getItem('token')}`
                    }
                });
                dispatch(deleteBuilding(response.data));
                alert('deleted successfully');
            }catch(err){
                console.log('building delete err', err)
            }
        }
        apiCall()
    }
}