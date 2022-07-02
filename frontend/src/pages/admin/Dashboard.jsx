import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../../features/admin/adminSlice'
import Spinner from "../../components/shared/Spinner"
import UserListItem from "../../components/UserListItem"
import { toast } from "react-toastify"
const Dashboard = () => {
  const dispatch = useDispatch()
  const {users, admin, isLoading, isError,isMessage} = useSelector(state => state.admin)

  useEffect(() => {
    if(isError) {
      toast.error(isMessage, {autoClose:1000})
    }
    if(admin) {
      dispatch(getUsers())
    }
      
  }, [isError, dispatch, admin, isMessage])
  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div>
        <h2>Welcome {admin.name}</h2>
      </div>
      <div>
        <h3>List of All Users</h3>
        {users.length > 0 ? (
          <>
            <table style={{width: "100%"}}>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              
              {users.map(user => (
                <UserListItem key={user._id} user={user} />
              ))}
                
            </table>
          </>
        ) : (
          <>
            <h4>You have no user yet</h4>
          </>
        )}
      </div>
    </>
  )
}

export default Dashboard