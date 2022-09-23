import './sidebar.css';

const me = require('../images/me.jpg');

const Sidebar = () => {
    return ( 
        <div className='sidebar'>
            <div className="sidebar-item">
                <span className="sidebar-title">About Me</span>
                <img src={me} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae assumenda fugit expedita quas, qui quaerat corporis! lorem
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Categories</span>
                <ul className="sidebar-list">
                    <li className="sidebar-listItem">Life</li>
                    <li className="sidebar-listItem">Music</li>
                    <li className="sidebar-listItem">Style</li>
                    <li className="sidebar-listItem">Sport</li>
                    <li className="sidebar-listItem">Tech</li>
                    <li className="sidebar-listItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow Us</span>
                    <div className="sidebar-social">
                        <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                        <i className="sidebar-icon fa-brands fa-square-twitter"></i>
                        <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                        <i className="sidebar-icon fa-brands fa-square-instagram"></i>
                    </div>
            </div>
        </div>
     );
}
 
export default Sidebar;