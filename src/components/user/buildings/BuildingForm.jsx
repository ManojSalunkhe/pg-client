import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { buildingPostAction, buildingEditAction } from '../../../redux/actions/buildingAction';
import '../../../css/buildings/buildingform.css';
import LeftSidebar from "../../sidebar/LeftSidebar";
import TopBar from "../../topbar/TopBar";

import logo from '/home/oem/React/pg fullstack/pg-client/src/images/building.png'
import maleLogo from '/home/oem/React/pg fullstack/pg-client/src/images/male.jpg'
import femaleLogo from '/home/oem/React/pg fullstack/pg-client/src/images/female.jpg'


const BuildingForm = (props) => {

    const { editBuilding } = props

    const [building, setBuilding] = useState(
        editBuilding ? { name: editBuilding.name, landmark: editBuilding.landmark, address: editBuilding.address } :
            { name: '', landmark: '', address: '', image: '', gender: '' });

    const [preview, setPreview] = useState('');

    const disptach = useDispatch();

    useEffect(() => {
        if (building.image) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            };
            reader.readAsDataURL(building.image)
        } else {
            setPreview(null);
        }
    }, [building.image])

    const imageSelect = (e) => {
        let file = e.target.files[0]
        setBuilding({ ...building, image: file })
        // let reader = new FileReader();
        // let url = reader.readAsDataURL(file)
        // reader.onloadend = (e) => {
        //     setBuilding({ ...building, image: file })
        // }
    }

    const handleBuildingSubmit = (e) => {
        e.preventDefault();

        if (editBuilding) {
            building._id = editBuilding._id;
            disptach(buildingEditAction(building, props))
        } else {
            let buildingData = new FormData();
            buildingData.append('name', building.name);
            buildingData.append('landmark', building.landmark);
            buildingData.append('address', building.address);
            buildingData.append('image', building.image);

            disptach(buildingPostAction(buildingData, props));
        }

        setBuilding({ name: '', landmark: '', address: '' });
    }


    return (
        <>
            <TopBar />
            <div className="buildingform-header">
                <LeftSidebar />
                <div className="buildingform-container">
                    {editBuilding ? <h2>Edit Building </h2> : <h2 style={{ textAlign: "center" }}>Add building</h2>}
                    <form className="buildingform" onSubmit={handleBuildingSubmit} encType="multipart/form-data">
                        <div className="buildingform-gender">
                            <div>
                                <img src={maleLogo} /> 
                                <input type="radio" name="male" />
                            </div>
                            <div>
                            <img src={femaleLogo} />
                                <input type="radio" name="female" />
                            </div>
                        </div>
                        <input className="buildingform-input" type='file' name='image' onChange={(e) => imageSelect(e)} accept="image/*" />
                        <input className="buildingform-input" type='text' placeholder="name *"
                            value={building.name} onChange={(e) => setBuilding({ ...building, name: e.target.value })} />
                        <input className="buildingform-input" type='text' placeholder="landmark *"
                            value={building.landmark} onChange={(e) => setBuilding({ ...building, landmark: e.target.value })} />
                        <input className="buildingform-input" type='text' placeholder="address *"
                            value={building.address} onChange={(e) => setBuilding({ ...building, address: e.target.value })} />
                        <button type="submit">submit</button>
                    </form>
                </div>
                <div className="buildingformpreview-container">
                    <h2>Preview</h2>
                    <div className="buildingformpreview">
                        {
                            preview ?
                                <img src={preview} /> : <img src={logo} />
                        }
                        <input className="buildingformpreview-input" value={building.name} disabled />
                        <input className="buildingformpreview-input" value={building.landmark} disabled />
                        <input className="buildingformpreview-input" value={building.address} disabled />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(BuildingForm);