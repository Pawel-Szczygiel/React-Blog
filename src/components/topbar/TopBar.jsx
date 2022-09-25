import './topbar.css';



const TopBar = () => {
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
                    <li className="top-list-item">home</li>
                    <li className="top-list-item">about</li>
                    <li className="top-list-item">contact</li>
                    <li className="top-list-item">write</li>
                    <li className="top-list-item">logout</li>
                </ul>
            </div>
            <div className="top-right">
                <img src="" alt=""  className='top-img'/>
                img
                <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
     );
}
 
export default TopBar;

