import {FaSignInAlt} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminLogin, reset } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import Spinner from '../../components/shared/Spinner'

const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const {isLoading, isError, isMessage, admin, isSuccess} = useSelector(state => state.admin)
    useEffect(() => {
        if(isError) {
            toast.error(isMessage, {autoClose:1500})
        }
        if(isSuccess && admin) {
            navigate("/admin/dashboard")
            toast.success("You are login", {autoClose:1000})
        }
        dispatch(reset())
    }, [isError, isMessage, admin, isSuccess, dispatch, navigate])
    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!email && !password) {
            toast.error("Please fill all fields", {autoClose:1000})
        } else {
            dispatch(adminLogin(formData))
        }
    }
    if(isLoading) {
        return <Spinner />
    }
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Admin Login
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit} >
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

export default AdminLogin