import { useEffect, useState } from 'react';
import axios from 'axios';

import './home.css';

import Header from  '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    console.log(search)

    async function fetchPosts() {
        const res = await axios.get(`/posts/${search}`);
        setPosts(res.data)
    }
    
    useEffect(() => {
        fetchPosts()
    }, [search]);

    return ( 
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
     );
}
 
export default Home;