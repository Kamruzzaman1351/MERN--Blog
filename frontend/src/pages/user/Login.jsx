import {FaSignInAlt} from "react-icons/fa"
import { useState, useEffect } from "react"
import { signIn, reset } from "../../features/user/auth/userSlice"
import { useSelector, useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../../components/shared/Spinner"
const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password: ""
  })
  const {email, password} = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isError, isSuccess, isMessage, isLoading} = useSelector((state) => state.user)
  useEffect(() => {
    if(isError) {
      toast.error(isMessage, {autoClose:1500})
    }
    if(isSuccess && user) {
      navigate("/user/dashboard")
      toast.success("You are login", {autoClose:1000})
    }
    dispatch(reset())
  }, [user, isError, isSuccess, isMessage, isLoading, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(!email || !password) {
      toast.error("Please provide right credintial", {autoClose: 1000})
    }
    dispatch(signIn(formData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and Create a Post</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login