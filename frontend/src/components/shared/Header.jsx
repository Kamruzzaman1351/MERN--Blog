import {FaSignInAlt, FaUser,} from 'react-icons/fa'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Blog</Link>
      </div>
      <ul>
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
        
      </ul>
    </header>
  )
}

export default Header