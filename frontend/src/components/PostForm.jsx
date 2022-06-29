import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addPost } from '../features/user/posts/postSlice'
const PostForm = ({setShowForm}) => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    })
    const {title, body} = formData
    const dispatch = useDispatch()
    const onChange = (e) => {
        setFormData((prevState) =>( {
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !body) {
          toast.error("Please fille all the inputs", {autoClose:1000})
        } else if(body.length <= 30) { 
          toast.error("Post body is less than 30 letter", {autoClose:1000})
          
        } else {
          dispatch(addPost(formData))         
          toast.success("Post Created", {autoClose:1000})
          setShowForm(false)
        }
        
    }
  return (
    <div>
      <h3>Add Post</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'></label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              placeholder='Enter Post title'
              onChange={onChange}
              value={title}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="body"></label>
            <textarea
              type='textarea'
              className='form-control'
              id='body'
              name='body'
              placeholder='Write your post'
              onChange={onChange}
              value={body}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Add Post
            </button>
          </div>
        </form>
    </div>
  )
}

export default PostForm