import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './singlePost.css';



const SinglePost = () => {

    const location = useLocation();
    const idPost = location.pathname.split('/')[2]

    const [post, setPost] = useState([]);

    
    useEffect(() => {
        async function getPost() {
            const res = await axios.get(`/posts/${idPost}`);
            setPost(res.data);
        };
        getPost();
    }, [idPost]);

    const {title, desc, photo, username, createdAt} = post;
    
    return ( 
        
        <div className='single-post'>
            <div className="singlePost-wrapper">
                {/* <img src={photo} alt=''  className='singlePost-img' /> */}
                <h1 className="singlePost-title">
                    {title}
                    <div className="singlePost-edit">
                    <i className="singlePost-icon fa-regular fa-pen-to-square"></i>
                    <i className="singlePost-icon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePost-info">
                    <span className='singlePost-author'>
                        Autor:
                        <Link to={`/?user=${username}`}>
                            <strong>{username}</strong>
                        </Link>
                    </span>
                        
                    <span className="singlePost-date">{new Date(createdAt).toDateString()}</span>
                </div>
                <p className='singlePost-desc'>{desc}</p>
            </div>
        </div>
     );
}
 
export default SinglePost;