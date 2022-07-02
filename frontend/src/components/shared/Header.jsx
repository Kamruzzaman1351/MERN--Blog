import {FaSignInAlt, FaUser,} from 'react-icons/fa'
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { reset, logout } from '../../features/user/auth/userSlice'
import { adminLogout } from '../../features/admin/adminSlice'
const Header = () => {
  const {user} = useSelector(state => state.user)
  const {admin} = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())   
    navigate("/")
  }
  const logoutAdmin = () => {
    dispatch(adminLogout())
    navigate("/")
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Blog</Link>
      </div>
      <ul>
        { admin && (
        <>
          <li>
            <Link to='/admin/dashboard'>
              Dashboard
            </Link>
            </li>
          <li>
            <Link to='/admin/allusers'>
                All Users
            </Link>
          </li>
          <li style={{cursor: "pointer"}}>
            <p onClick={logoutAdmin}> 
              Logout
            </p>
          </li>
        </>
        )}
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
        {(!user && !admin) && (
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