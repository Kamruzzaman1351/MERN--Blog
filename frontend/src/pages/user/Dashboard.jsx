import { useSelector } from "react-redux"
import PostForm from "../../components/PostForm"
import PostItem from "../../components/PostItem"
import { useState } from "react"


const Dashboard = () => {
  const [showForm, setShowForm] = useState(false)
  const {user} = useSelector(state => state.user)
  const {posts} = useSelector(state => state.posts)
  const editPost = (id) => {
    console.log(id)
  }
  const deletePost = (id) => {
    console.log(id)
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
          <PostForm />
        </div>
      )}
      <div>
        <h2>All Posts</h2>
        {posts.length > 0 ? (
          <>
            <ul>
              {posts.map((post) => (
                <PostItem key={post._id} post={post} editPost={editPost} deletePost={deletePost}/>
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