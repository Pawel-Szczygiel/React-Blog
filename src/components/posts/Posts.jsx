import './posts.css';

import Post from '../post/Post';

const Posts = ({posts}) => {

    const renderPosts = posts.map(post => {  
        return <Post key={post._id} {...post} />
    });


    return ( 
        <div className='posts'>
            {renderPosts} 
        </div>
     );
}
 
export default Posts;