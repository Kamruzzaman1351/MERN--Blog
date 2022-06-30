import { useSelector, useDispatch } from "react-redux"
import PostForm from "../../components/PostForm"
import PostItem from "../../components/PostItem"
import { useState, useEffect } from "react"
import { getPost, deletePost } from "../../features/user/posts/postSlice"
import { toast } from "react-toastify"
import Spinner from "../../components/shared/Spinner"
import PostUpdateForm from "../../components/PostUpdateForm"
const Dashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [postData, setPostData] = useState({})
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
    const post = posts.filter((post) => post._id === id)
    setPostData(post[0])
    setShowForm(false)
    setShowUpdateForm(true)
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
      <div>
        <h1>Welcome {user.name}</h1>
        
      </div>
      {showForm && (
        <div className="postForm">
          <PostForm 
            setShowForm={setShowForm}
          />
        </div>
      )}
      {showUpdateForm && (
        <div className="postForm">
          <PostUpdateForm
            setShowForm={setShowUpdateForm}
            postData= {postData}
          />
        </div>
      )}
      <div>
        <div className="dashboardHeading">
          <h2>All Posts</h2>
          <button className="btn" 
            onClick={() => {
              setShowForm(prevState => !prevState)
              setShowUpdateForm(false)
            }}>
            {!showForm ? "Add Post" : "Hide Form"}
          </button>
        </div>
        {posts.length > 0 ? (
          <>
            <ul>
              {posts.map((post) => (
                <PostItem 
                  key={post._id} 
                  post={post} 
                  editPost={editPost} 
                  deletePost={postDelete} 
                />
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