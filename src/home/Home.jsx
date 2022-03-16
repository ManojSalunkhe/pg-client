import './home.css'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div>
            {/* <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div> */}

            <div className='navigation'>
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" className="login-img"/>
                <ul>  
                    <li><Link className='link' to='/'>HOME</Link></li>
                    <li><Link className='link' to='/buildings'>BUILDINGS</Link></li>
                    <li><Link className='link' to='/about'>ABOUT</Link></li>
                    <li><Link className='link' to='/contact' >CONTACT</Link></li>
                </ul>
                <Link to='/login'><button className='btn'>Login</button></Link>
            </div>
        </div>
    )
}

export default Home