import './topbar.css';
import { Link } from 'react-router-dom';


const TopBar = () => {
    const user = false;
    return ( 
        <div className="top">
            <div className="top-left">
                <i className="top-icon fa-brands fa-square-facebook"></i>
                <i className="top-icon fa-brands fa-square-twitter"></i>
                <i className="top-icon fa-brands fa-square-pinterest"></i>
                <i className="top-icon fa-brands fa-square-instagram"></i>
                </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="top-list-item">
                        <Link to='/' >home</Link>
                    </li>
                    <li className="top-list-item">
                        <Link to='/' >about</Link>
                    </li>
                    <li className="top-list-item">
                        <Link to='/' >contact</Link>
                    </li>
                    <li className="top-list-item">
                        <Link to='/write'>write</Link>
                    </li>
                    <li className="top-list-item">
                        {user && 'logout'}
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {user ? <img src={require('../../images/me.jpg')} alt='user 'className='top-img'/>
                    : (
                        <ul className='top-list'>
                            <li className='top-list-item'>
                                <Link to='/login'>login</Link>
                            </li>
                            <li className='top-list-item'>
                                <Link to='/register'>register</Link>
                            </li>
                        </ul>
                    )
            }
                <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
     );
}
 
export default TopBar;

