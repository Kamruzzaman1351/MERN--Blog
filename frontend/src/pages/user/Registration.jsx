import {FaUser} from "react-icons/fa"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, reset } from "../../features/user/auth/userSlice"

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
    password1: "",
  })

  const {name, email, password, password1} = formData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoading, isError, user, isMessage, isSuccess} = useSelector((state) => state.user)
  useEffect(() => {
    if(isError) {
      toast.error(isMessage, {autoClose:1500})
    }
    if(user || isSuccess) {
      navigate("/user/dashboard")
      toast.success("Registration complete", {autoClose:1000})
    }

    dispatch(reset())
  }, [isError, user, isMessage, isSuccess, navigate, dispatch])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(!name || !email || !password) {
      toast.error("Please fill all the input fields", {autoClose:1000})
    }
    if(password !== password1) {
      toast.error("Password does not match", {autoClose:1000})
    } else {
      const userData = {name, email, password}
      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <h2> Loading...</h2>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password1'
              name='password1'
              placeholder='Confirm password'
              value={password1}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Registration