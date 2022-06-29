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
    const {user} = useSelector(state => state.user)
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
      {allPost.length !==0 ? (
        <>
          {allPost.map((post) => (
            <HomePostItem key={post._id} post={post}/>
          ))}
        </>
      ) : (
        <>
          <div className='noPost'>
            <h4>No Post Yet</h4>
            <p style={{paddingBottom: "30px"}}>Be the first one to create post</p>
            <button className='btn' onClick={() => user ?  navigate("/user/dashboard") : navigate("/user/login")}>Create Post</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Home