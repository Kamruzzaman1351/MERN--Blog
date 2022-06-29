import {useEffect} from 'react'
import { getAllPosts } from "../../features/user/posts/postSlice"
import {useSelector, useDispatch} from "react-redux"
import {toast} from "react-toastify"
import Spinner from "../../components/shared/Spinner"
import HomePostItem from '../../components/HomePostItem'
import {useNavigate} from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const {allPost, isLoading, isError, isMessage } = useSelector(state => state.posts)
    useEffect(() => {
        if(isError) {
            toast.error(isMessage, {autoClose:1000})
        }
        dispatch(getAllPosts())
    }, [isError, isMessage, dispatch])


    if(isLoading) {
      return <Spinner />
    }
  return (
    <div>
      {allPost ? (
        <>
          {allPost.map((post) => (
            <HomePostItem key={post._id} post={post}/>
          ))}
        </>
      ) : (
        <>
          <div>
            <h4>No Post Yet</h4>
            <p>Be the first one to create post</p>
            <button className='btn' onClick={() => navigate("/user/login")}>Create Post</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Home