import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { roomSpecificBuildingGetAction, roomDeleteAction } from '../../../redux/actions/roomActions';

const Rooms = (props) => {

    const buildingId = props.match.params.id;
    const disptach = useDispatch();

    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        console.log('useEffect in room')
        disptach(roomSpecificBuildingGetAction(buildingId));
    }, []);

    console.log(rooms)

    return (
        <div>
            <h1>Rooms</h1>
            <Link to={`/building/${buildingId}`}><button>go back to building</button></Link>
            {
                rooms ? (
                    <div>
                        {
                            rooms.map((room) => {
                                return (
                                    <div key={room.number} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                                        <span><em>Type : </em>{room.type}</span>
                                        <span><em>Number : </em>{room.number}</span>
                                        <span><em>Rent : </em>{room.rent}</span>
                                        <span><Link to={{ pathname: `/building/${buildingId}/room/${room._id}`, state: room }}><button>edit</button></Link></span>
                                        <span><button onClick={() => disptach(roomDeleteAction(buildingId, room._id))}>delete</button></span><hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </div>
    )
}


export default Rooms