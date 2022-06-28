import {FaEdit, FaTimes} from 'react-icons/fa'

const PostItem = ({post, editPost, deletePost}) => {
  return (
    <div className='post'>
        <div>
            <h3> {post.title}</h3>
            <small><span>Created at : {new Date(post.createdAt).toLocaleString("en-US")}</span></small>
            <p className='post-body'>{post.body}</p>
        </div>
        {(editPost || deletePost) && (
            <div className='postEdit'>
                {editPost && (
                    <p className='edit' onClick={() =>editPost(post._id)}>
                        <FaEdit />                
                    </p>
                )}
                {deletePost && (
                    <p className='delete' onClick={()=>deletePost(post._id)}>
                        <FaTimes />
                    </p>
                )}
            </div>
        )}
    </div>
  )
}

export default PostItem