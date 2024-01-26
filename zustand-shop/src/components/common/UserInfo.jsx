import React from 'react'

const UserInfo = ({user}) => {
  return (
    <>
        <div className='flex flex-row justify-between gap-10 mt-1 pt-3'>
            <div><b>Name:</b> {user.firstname} {user.lastname}</div>
            <div><b>Email:</b> {user.email}</div>
            <div><b>Role:</b> {user.role}</div>
        </div>
    </>
  )
}

export default UserInfo