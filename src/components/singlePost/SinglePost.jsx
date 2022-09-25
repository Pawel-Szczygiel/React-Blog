import './singlePost.css';

const postImg = require('../../images/p1.jpg')

const SinglePost = () => {
    return ( 
        <div className='single-post'>
            <div className="singlePost-wrapper">
                <img src={postImg} alt="post" className='singlePost-img'
                />
                <h1 className="singlePost-title">
                    Lorem ipsum dolor.
                    <div className="singlePost-edit">
                    <i className="singlePost-icon fa-regular fa-pen-to-square"></i>
                    <i className="singlePost-icon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePost-info">
                    <span className='singlePost-author'>Autor: <strong>Paweł</strong></span>
                    <span className="singlePost-date">1 hour ago</span>
                </div>
                <p className='singlePost-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam, magni suscipit, eius iste facere repellat ex mollitia quae quo provident ut nemo minus est aliquid? Consequatur quae omnis ad temporibus necessitatibus ab eaque quam vel quis saepe, consectetur veniam officiis, pariatur voluptas. Fugiat inventore, nulla quas a, quia voluptatibus temporibus consequuntur sunt excepturi architecto placeat rem corporis quod tempora illum voluptates enim hic vitae odit nemo reprehenderit? Eaque impedit, nam ab ea iure aliquid asperiores minima hic iste, fuga sequi perferendis eligendi enim natus repudiandae repellat quaerat. Consequatur quisquam, corrupti nobis nulla, obcaecati natus odio, eveniet perferendis et repudiandae cumque sed excepturi! Eum, blanditiis sed laborum iure unde quaerat eveniet possimus eos illo, iste modi quia. Sunt nesciunt animi reiciendis reprehenderit facilis laboriosam molestiae expedita consequuntur maxime nam ea est, at unde itaque aliquam corrupti? Ex reiciendis, tenetur eum libero hic alias facilis quisquam officia eligendi porro quia dolor? Excepturi quisquam rem et dignissimos! Nihil vitae, laboriosam eaque doloremque ipsam explicabo quibusdam laudantium quas voluptatem deleniti esse sed accusamus omnis quaerat dolores consectetur facilis corrupti quod laborum minima aspernatur repellat excepturi. Saepe odio possimus aut eligendi? Nostrum non temporibus quidem, dolorum accusamus inventore vel, eligendi dolorem eius fugiat nulla aperiam maxime odio numquam in necessitatibus sint saepe? Rem quo, excepturi cupiditate dignissimos aut ratione, animi eius consectetur sit iusto repudiandae, a voluptatum sed blanditiis numquam eveniet cumque atque iure nam iste illum. Beatae blanditiis inventore doloremque doloribus nostrum a dolorem sequi mollitia eligendi minus sapiente quasi repellat est architecto, minima, fuga totam ducimus saepe necessitatibus voluptatibus ad. Ex impedit sint nesciunt non cumque in. Dignissimos odit modi accusantium voluptates culpa officiis fugiat facilis repellendus possimus, eaque animi asperiores nam ducimus aliquam veniam harum ea, inventore consectetur id neque quidem. Quas veritatis quam deserunt nemo rerum, unde labore harum adipisci.</p>
            </div>
        </div>
     );
}
 
export default SinglePost;