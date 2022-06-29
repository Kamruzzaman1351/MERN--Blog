import {FaTimes} from "react-icons/fa"
import { useState } from "react"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { updatePost} from "../features/user/posts/postSlice"

const PostUpdateForm = ({setShowForm, postData}) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title: postData.title,
        body: postData.body,
    })
    const {title, body} = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(title === postData.title && body === postData.body) {
            toast.error("You did not change anything", {autoClose:1000})
        } else if(!title || !body) {
            toast.error("Please fille all the inputs", {autoClose:1000})
        } else if(body.length <= 30) { 
            toast.error("Post body is less than 30 letter", {autoClose:1000})
        } else {
            const data = {
                id: postData._id,
                formData
            }
            dispatch(updatePost(data))
            setShowForm(false)
            toast.success("Post Updated", {autoClose: 1000})
        }
    }



  return (
    <div>
        <div className="updatePostHeading">
            <h3>Update Post</h3>
            <div onClick={() => setShowForm(false)}>
                <FaTimes />
            </div>
        </div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <label htmlFor='title'></label>
            <input
                type='text'
                className='form-control'
                id='title'
                name='title'
                value={title}
                onChange={onChange}
            />
            </div>
            <div className='form-group'>
            <label htmlFor="body"></label>
            <textarea
                type='textarea'
                className='form-control'
                id='body'
                name='body'
                value={body}
                onChange={onChange}
                
            />
            </div>
            <div className='form-group'>
            <button type='submit' className='btn btn-block'>
                Update Post
            </button>
            </div>
        </form>
    </div>
  )
}

export default PostUpdateForm