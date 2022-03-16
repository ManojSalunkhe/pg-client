import RoomForm from "./RoomForm";

const RoomPost = (props) => {

    const buildingId = props.match.params.id;

    return <RoomForm buildingId={buildingId} />
}

export default RoomPost