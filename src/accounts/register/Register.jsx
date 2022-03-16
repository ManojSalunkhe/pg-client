import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {

    const [register, setRegister] = useState({ firstName: '',lastName:'', mobile: '', email: '', password: '' });

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
        alert('register successfull')
        setRegister({ firstName: '',lastName:'', mobile: '', email: '', password: '' })
    }

    return (
        <div className='register'>
            <div className='left'>
                <div>
                    <h2>Welcome</h2>
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                </div>
                <div>
                    <p>You are few seconds away from earning your own money !</p>
                    <div className='link'>
                        <em> Already a member ? </em>   
                        <Link to="/login" type="button"> <button className='btn'>Login</button> </Link>
                    </div>
                </div>    
            </div>
            <div className='right'>
                <form onSubmit={handleRegisterSubmit} className='form'>
                    <h2>Register with us ...!</h2>
                    <div>
                        <input type='text' placeholder='First Name *' className='inputs'
                                value={register.firstName} onChange={(e) => setRegister({ ...register, firstName: e.target.value })} />
                        <input type='text' placeholder='Last Name *' className='inputs'
                                value={register.lastName} onChange={(e) => setRegister({ ...register, lastName: e.target.value })} />
                    </div>
                    <div>
                        <input type='text' placeholder='Mobile *' className='inputs' 
                                value={register.mobile} onChange={(e) => setRegister({ ...register, mobile: e.target.value })} />
                        <input type='email' placeholder='Email *' className='inputs' 
                                value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
                    </div>
                    <div>
                        <input type='password' placeholder='Password *' className='inputs' 
                                value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                        <input type='password' placeholder='Confirm Password *' className='inputs' disabled         
                                value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register