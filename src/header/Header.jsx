import './header.css';
const image = require('../images/fantasy.jpg')

const Header = () => {
    return ( 
        <div className="header">
             <div className="header-title">
                <span className='header-title-sm'>React & Node</span>
                <span className='header-title-lg'>Blog</span>
             </div>
             <img className='header-img' src={image} alt="" />
        </div>
     );
}
 
export default Header;



// https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?cs=srgb&dl=pexels-pixabay-46164.jpg&fm=jpg