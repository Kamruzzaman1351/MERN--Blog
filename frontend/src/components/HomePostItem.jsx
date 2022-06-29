
const HomePostItem = ({post}) => {
  return (
    <div className="post">
        <div>
            <h3> {post.title}</h3>
            <p>Created By : {post.user_name}</p>
            <small><span>Created at : {new Date(post.createdAt).toLocaleString("en-US")}</span></small>
            <br />
            <p className='post-body'>{post.body}</p>
        </div>
    </div>
  )
}

export default HomePostItem