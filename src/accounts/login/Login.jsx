import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [login, setLogin] = useState({ email: '', password: '' });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const loginApiCall = async () => {
            try {
                const result = await axios.post('http://localhost:3700/pg/login', login)
                console.log(result.data)
            } catch (err) {
                console.log(err)
            }
        }
        loginApiCall()
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <input type="email" placeholder="email" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                <input type="password" placeholder="password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default Login