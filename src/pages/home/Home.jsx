import Header from  '../../header/Header';
import './home.css';

import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';

const Home = () => {
    return ( 
        <>
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </>
     );
}
 
export default Home;