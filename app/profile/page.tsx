import { UserButton } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
    <UserButton afterSignOutUrl='/' showName={true} />
  )
}

export default ProfilePage