import BuildingForm from "./BuildingForm";

const BuildingEdit = (props) => {

    const editBuilding = props.location.state;

    return <BuildingForm editBuilding={editBuilding} />
}

export default BuildingEdit