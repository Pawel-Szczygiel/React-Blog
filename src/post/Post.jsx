import './post.css';

const postimg1 = require('../images/p1.jpg')

const Post = () => {
    return ( 
        <div className='post'>
            <img src={postimg1} alt="icons" className='post-image' />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">
                    Lorem ipsum dolor sit.
                </span>
                <hr />
                <span className='post-date'>1 hour ago</span>
            </div>
            <p className='post-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque enim quas molestiae libero laboriosam corrupti voluptate temporibus laborum, nobis beatae accusamus sit veritatis cumque hic ut eligendi doloribus explicabo dolorum repellat sequi ipsa. Provident sapiente delectus debitis deserunt nemo esse fugit facere, autem maxime ab veritatis, aliquam, ducimus velit.</p>
        </div>

     );
}
 
export default Post;