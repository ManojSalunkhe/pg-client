import { Redirect, Route } from 'react-router-dom';

const PrivateRouting = ({component: Component, ...rest})=>{
    return(
        <Route
            {...rest}
            render = {(props)=>{
                return localStorage.getItem('token') ? ( 
                <Component {...props}/> 
                ) : (
                <Redirect to={{ pathname: '/login' }}/>
                )
            }}
        />
    )
}
export default PrivateRouting   