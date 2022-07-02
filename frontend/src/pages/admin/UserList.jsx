import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { getUsers } from "../../features/admin/adminSlice"
import { toast } from "react-toastify"
import Spinner from "../../components/shared/Spinner"
import UserListItem from "../../components/UserListItem"

const UserList = () => {
  const dispatch = useDispatch()
  const {users, admin, isLoading, isError, isMessage} = useSelector(state => state.admin)
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
      {users.length > 0 ? (
        <>
          <h2>All Users</h2>
          <table style={{width: "100%",}}>
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
          <h2>No User</h2>
        </>
      )}
    </>
  )
}

export default UserList