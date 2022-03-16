import Register from "../accounts/register/Register";
import Login from "../accounts/login/Login";
import Home from "../home/Home";
import Profile from "../components/user/dashboard/Dashboard";
import Building from "../components/user/buildings/Building";
import Buildings from "../components/user/buildings/Buildings";
import BuildingPost from "../components/user/buildings/BuildingPost";
import BuildingEdit from "../components/user/buildings/BuildingEdit";
import RoomPost from "../components/user/rooms/RoomPost";
import Rooms from '../components/user/rooms/Rooms';
import RoomEdit from '../components/user/rooms/RoomEdit';
import ForgotPassword from "../accounts/forgotpassword/ForgotPassword";
import ResetPassword from "../accounts/forgotpassword/ResetPassword";

export const routesArr = [
    {
        path: '/register',
        component: Register,
        name: 'REGISTER',
    },
    {
        path: '/login',
        component: Login,
        name: 'LOGIN'
    },
    {
        path: '/',
        component: Home,
        name: 'HOME',
        exact: true
    },

    // FORGOT PASSWORD ROUTES
    {
        path: '/forgot_password',
        component: ForgotPassword,
        name: 'FORGOT_PASSWORD'
    },
    {
        path: '/reset_password',
        component: ResetPassword,
        name: "RESET_PASSWORD"
    }
]


export const privateRoutesArr = [

    // BUILDING ROUTES

    {
        path: '/buildings',
        component: Buildings,
        name: 'BUILDINGS'
    },
    {
        path: '/profile',
        component: Profile,
        name: 'PROFILE'
    },
    {
        path: '/building_post',
        component: BuildingPost,
        name: 'BUILDING_POST'
    },
    {
        path: '/building_edit/:id',
        component: BuildingEdit,
        name: 'BUILDING_EDIT'
    },
    {
        path: '/building/:id',
        component: Building,
        name: 'BUILDING',
        exact: true
    },

    //ROOM ROUTES

    {
        path: '/building/:id/room_post',
        component: RoomPost,
        name: 'ROOM_POST'
    },
    {
        path: '/building/:id/rooms',
        component: Rooms,
        name: 'ROOMS'
    },
    {
        path: '/building/:b_id/room/:r_id',
        component: RoomEdit,
        name: 'ROOM_EDIT'
    }
]