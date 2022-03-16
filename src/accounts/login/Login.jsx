import {loginAction} from '../../redux/actions/loginAction';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css'

const Login = (props) => {
    const [login, setLogin] = useState({ email: '', password: '' });

    const dispatch = useDispatch();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAction(login,props));
        setLogin({ email: '', password: '' })
    }

    return (
        <div className="login-header">
            <div className='login-left'>
                <div>
                    <h2>Welcome</h2>
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" className="login-img"/>
                </div>
                <div>
                    <p>You are few seconds away from earning your own money !</p>
                    <div className='login-link'>
                        <em> Not yet registered ? </em>   
                        <Link to="/register" type="button"> <button className='login-btn'>Register</button> </Link>
                    </div>
                </div>    
            </div>
            <div className="login-right">
                <form onSubmit={handleLoginSubmit} className="login-form">
                    <h2>Login here ...</h2>
                    <input type="email" placeholder="Email *" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                    <input type="password" placeholder="Password *" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                    <button className='btn-submit' type="submit">login</button>
                    <Link to="/forgot_password">Forgot password ?</Link>
                </form>
            </div>
        </div>
    )
}

export default Login