import { Link } from 'react-router-dom';
import './post.css';



const Post = ({_id, title, desc, createdAt, photo, categories}) => {
    return ( 
        <div className='post'>
            {/* {photo && (
                <img src={photo}  className='post-image' />
            )} */}
            <div className="post-info">
                <div className="post-cats">
                    {categories.map(category => {
                        <span className="post-cat">{category.name}</span>
                    })}

               
                </div>
                <Link to={`/post/${_id}`}>
                    <span className="post-title">{title}</span>
                </Link>
                <hr />
                <span className='post-date'>{new Date(createdAt).toDateString() }</span>
            </div>
            <p className='post-description'>
                {desc}
            </p>
        </div>

     );
}
 
export default Post;