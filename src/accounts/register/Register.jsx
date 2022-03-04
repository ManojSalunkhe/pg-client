import axios from 'axios';
import React, { useState } from 'react';
import './register.css';

function Register() {

    const [register, setRegister] = useState({ name: '', mobile: '', email: '', password: '' });

    const handleRegisterSubmit = (e)=>{
        e.preventDefault();
        console.log(register)
        const registerApiCall = async()=>{
            try{
                const result = await axios.post('http://localhost:3700/pg/register',register)
                console.log(result.data)
            }catch(err){
                console.log(err)
            }
        }
        registerApiCall()
    }

    return (
        <div className='register'>
            <form onSubmit={handleRegisterSubmit} className='form'>
                <input type='text' placeholder='name' value={register.name} onChange={(e) => setRegister({ ...register, name: e.target.value })} />
                <input type='text' placeholder='mobile' value={register.mobile} onChange={(e) => setRegister({ ...register, mobile: e.target.value })} />
                <input type='email' placeholder='email' value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                <input type='password' placeholder='password' value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Register