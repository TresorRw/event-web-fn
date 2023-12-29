'use client'
import OnBoardForm from '@/Components/OnBoardForm';
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs';

const OnBoarding = () => {
  const router = useRouter();
  const { user } = useUser();
  if (user?.publicMetadata.role) {
    router.push('/profile');
  }

  return (
    <OnBoardForm names={user?.firstName as string} userId={user?.id as string} />
  )
}

export default OnBoarding