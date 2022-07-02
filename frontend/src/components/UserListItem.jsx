import React from 'react'

const UserListItem = ({user}) => {
  return (
    <>
      <tbody>
          <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>Delete</td>
          </tr>
      </tbody>
    </>
    
  )
}

export default UserListItem