import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const me = require('../../images/me.jpg');

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function getCats() {
            const res = await axios.get('/categories');
            setCats(res.data);
        };
        getCats();
    }, []);

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
                    {cats.map(c => (
                        <Link key={c._id}  to={`/?cat=${c.title}`}>
                            <li className="sidebar-listItem">{c.title}</li>
                        </Link>
                    ))}
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