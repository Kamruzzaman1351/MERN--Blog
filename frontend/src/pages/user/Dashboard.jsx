import { useSelector, useDispatch } from "react-redux"
import PostForm from "../../components/PostForm"
import PostItem from "../../components/PostItem"
import { useState, useEffect } from "react"
import { getPost, deletePost } from "../../features/user/posts/postSlice"
import { toast } from "react-toastify"
import Spinner from "../../components/shared/Spinner"
const Dashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const {user} = useSelector(state => state.user)
  const {posts, isError, isLoading, isMessage} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    if(isError) {
      toast.error(isMessage, {autoClose:1000})
    }
    if(user) {
      dispatch(getPost())
    }
    if(isMessage) {
      toast.error(isMessage, {autoClose:1000})
    }
  }, [user, isError, dispatch, isMessage,])
  const editPost = (id) => {
    console.log(id)
  }
  const postDelete = (id) => {
    if(window.confirm("Are you sure")) {
      dispatch(deletePost(id))
    }
  }

  if(isLoading) {
    return <Spinner />
  }



  return (
    <div>
      <div className="dashboardHeading">
        <h1>Welcome {user.name}</h1>
        <button className="btn" onClick={() => setShowForm(prevState => !prevState)}>
          {!showForm ? "Add Post" : "Hide Form"}
        </button>
      </div>
      {showForm && (
        <div className="postForm">
          <PostForm setShowForm={setShowForm}/>
        </div>
      )}
      <div>
        <h2>All Posts</h2>
        {posts.length > 0 ? (
          <>
            <ul>
              {posts.map((post) => (
                <PostItem key={post._id} post={post} editPost={editPost} deletePost={postDelete}/>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3>You have no post yet</h3>
          </>
        )}
      </div>
      
    </div>
  )
}

export default Dashboard