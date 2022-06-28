import React from 'react'

const PostForm = () => {
  return (
    <div>
        <form>
          <div className='form-group'>
            <label htmlFor='title'></label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              placeholder='Enter Post title'
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
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}

export default PostForm