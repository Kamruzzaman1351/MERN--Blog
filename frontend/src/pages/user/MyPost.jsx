import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPost } from "../../features/user/posts/postSlice"
import {useNavigate} from "react-router-dom"

const MyPost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {posts, isLoading, isError,isMessage,} = useSelector(state => state.posts)
  const {user} = useSelector(state => state.user)
  
  useEffect(() => { 
    if(!user) {
      navigate("/user/login")
    }   
    if(isError) {
      console.log(isMessage)
    }
    dispatch(getPost())
  }, [user, navigate, dispatch, isError, isMessage])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <h1 key={post._id}>{post.title}</h1>
          ))}
        </>
      ) : (
        <>
          no post
        </>
      )}
    </>
  )
}

export default MyPost