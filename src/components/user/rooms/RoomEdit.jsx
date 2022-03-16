import RoomForm from "./RoomForm";

const RoomEdit = (props) => {
    const editRoom = props.location.state;
    return <RoomForm editRoom={editRoom} />
}

export default RoomEdit