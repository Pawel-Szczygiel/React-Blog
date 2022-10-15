import './settings.css';


import Sidebar from '../../components/sidebar/Sidebar';



const Settings = () => {
    return ( 
        <div className='settings'>
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update your Account</span>
                    <span className="settings-delete-title">Delete Account</span>
                </div>
                <form  className="settings-form">
                    <label >Profile Picture</label>
                    <div className="settings-pp">
                        <img src={require('../../images/me.jpg')} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settings-pp-icon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label htmlFor="user">User name</label>
                    <input type="text" placeholder='Paweł' id='user' />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='pawel86szczygiel@gmail.com' />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' placeholder='Secret' />
                    <button className="settings-submit" type='submit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
     );
}
 
export default Settings;