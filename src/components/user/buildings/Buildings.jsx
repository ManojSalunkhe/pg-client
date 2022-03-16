import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { buildingDeleteAction } from '../../../redux/actions/buildingAction';
import LeftSidebar from '../../sidebar/LeftSidebar';
import TopBar from '../../topbar/TopBar'
import '../../../css/buildings/buildings.css';

const Buildings = (props) => {
    console.log('buildings')

    const disptach = useDispatch();

    const buildings = useSelector((state) => {
        return state.buildings
    })

    const handleShow = (building) => {
        props.history.push({ pathname: `/building/${building._id}` })
    }

    console.log('he', buildings)

    return (
        <>
            <TopBar />
            <div className="buildings-header">
                <LeftSidebar />
                <div className="buildings-container">
                    <Link to='/building_post'> <button className="link-btn">Add Building</button> </Link><br />
                    {
                        buildings.map((building) => {
                            return (
                                <div key={building.name} className='buildings-innerContainer'>
                                    <div  ><img src={`http://localhost:3700/${building.image}`} alt="yaswanth" /></div>
                                    <div className='buildings-list'>
                                        <span onClick={() => handleShow(building)}><em>Name : </em>{building.name}</span>
                                        <span><em>landmark : </em>{building.landmark}</span>
                                        <span><em>address : </em>{building.address}</span>
                                        {/* <span><Link to={{ pathname: `/building_edit/${building._id}`, state: building }}><button>edit</button> </Link></span>
                                            <span><button onClick={() => disptach(buildingDeleteAction(building._id))}>delete</button></span> */}
                                    </div>
                                    <>
                                        <span><Link to={{ pathname: `/building_edit/${building._id}`, state: building }}><button>edit</button> </Link></span>
                                        <span><button onClick={() => disptach(buildingDeleteAction(building._id))}>delete</button></span>
                                    </>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Buildings