import '../../css/topbar/topbar.css';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className='firstDiv'>
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" className='imgTag'/>
            </div>
            <div className='secondDiv'>
                 <h1 className='lighter-font'>Hello, <span className='user-name'>Vikas</span></h1>
                 <span className='lighter-font'>The human spirit must previl over technology</span>
            </div>
        </div>
    )
}

export default TopBar