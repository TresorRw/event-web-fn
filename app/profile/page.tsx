import { UserButton, UserProfile } from '@clerk/nextjs'

const ProfilePage = () => {
  return (
    <>
      <UserButton afterSignOutUrl='/' showName={true} />
      <UserProfile  />
    </>
  )
}

export default ProfilePage