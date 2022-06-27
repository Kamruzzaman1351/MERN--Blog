import {FaSignInAlt, FaUser,} from 'react-icons/fa'
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { reset, logout } from '../../features/user/userSlice'
const Header = () => {
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())   
    navigate("/")
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Blog</Link>
      </div>
      <ul>
        {user && (
          <>
             <li>
              <Link to='/user/dashboard'>
                  Dashboard
              </Link>
            </li>
            <li>
              <Link to='/user/post'>
                  My Posts
              </Link>
            </li>
            <li style={{cursor: "pointer"}}>
              <p onClick={onLogout}> 
                Logout
              </p>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
            <Link to='/user/login'>
                <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/user/register'>
                <FaUser /> Register
                </Link>
            </li>
          </>
        )}
        
      </ul>
    </header>
  )
}

export default Header