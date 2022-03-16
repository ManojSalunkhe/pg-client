import { useState } from "react";
import { useDispatch } from "react-redux";
import { roomPostAction, roomEditAction } from '../../../redux/actions/roomActions';
import { withRouter } from "react-router-dom";

const RoomForm = (props) => {

    const { buildingId, editRoom } = props;

    const disptach = useDispatch();

    const [room, setRoom] = useState(editRoom ? { type: editRoom.type, number: editRoom.number, rent: editRoom.rent } : { type: '', number: '', rent: '' });

    const hanndleRoomSubmit = (e) => {
        e.preventDefault();
        room.buildingId = buildingId;
        if (editRoom) {
            console.log('edit')
            room._id = editRoom._id;
            room.buildingId = editRoom.buildingId;
            disptach(roomEditAction(room, props));
        } else {
            console.log('add')
            disptach(roomPostAction(room, props));
        }
        setRoom({ type: '', number: '', rent: '' });
    }

    return (
        <div>{editRoom ? <h2>Edit Room</h2> : <h2>Add Form</h2>}
            <form onSubmit={hanndleRoomSubmit}>
                <input type='text' placeholder="type *"
                    value={room.type} onChange={(e) => setRoom({ ...room, type: e.target.value })} />
                <input type='number' placeholder="room number *"
                    value={room.number} onChange={(e) => setRoom({ ...room, number: e.target.value })} />
                <input type='rent *' placeholder="rent *"
                    value={room.rent} onChange={(e) => setRoom({ ...room, rent: e.target.value })} />
                <input type='submit' />
            </form>
        </div>
    )
}
export default withRouter(RoomForm)