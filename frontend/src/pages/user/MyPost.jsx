import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPost } from "../../features/user/posts/postSlice"
import {useNavigate} from "react-router-dom"
import PostItem from "../../components/PostItem"
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
            <PostItem key={post._id} post={post}/>
          ))}
        </>
      ) : (
        <>
          <h2>No Post Yet</h2>
        </>
      )}
    </>
  )
}

export default MyPost