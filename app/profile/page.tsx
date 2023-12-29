import { UserButton } from '@clerk/nextjs'

const ProfilePage = () => {
  return (
    <>
      <UserButton afterSignOutUrl='/' showName={true} />
    </>
  )
}

export default ProfilePage