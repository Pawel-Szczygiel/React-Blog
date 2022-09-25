import './write.css';

const Write = () => {
    return ( 
        <div className='write'>
            <img className='write-img' src={require('../../images/write.jpg')} alt="" />
            <form className='write-form'>
                <div className="write-form-group">
                    <label htmlFor="fileinput">
                    <i className="write-icon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileinput' style={{display:'none'}} />
                    <input type="text"  placeholder='title' className='write-input' autoFocus/>
                </div>
                <div className="write-form-group">
                    <textarea placeholder='Tell your story... ' type='text' className='write-text write-input' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='write-submit'>Publish</button>
            </form>
        </div>
     );
}
 
export default Write;