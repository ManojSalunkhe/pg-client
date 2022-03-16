import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Building = (props) => {
    const { id } = props.match.params;

    const buildings = useSelector((state) => {
        return state.buildings
    })

    console.log(buildings);

    const building = buildings.find((ele) => ele._id === id);

    return (
        building ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                <span><em>Name : </em>{building.name}</span>
                <span><em>landmark : </em>{building.landmark}</span>
                <span><em>address : </em>{building.address}</span>
                <span><Link to={`/building/${building._id}/room_post`}><button>Add Room</button></Link></span>
                <span><Link to={`/building/${building._id}/rooms`}><button>View Rooms</button></Link></span>
            </div>
        ) : (
            null
        )
    )
}


export default Building