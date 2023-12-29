'use client'

import { AssignRole } from "@/Actions"
import { useRouter } from 'next/navigation'

const OnBoardForm = ({ names, userId }: { names: string, userId: string }) => {
  const router = useRouter()
  const saveRole = async (formData: FormData) => {
    await AssignRole(formData.get('role') as string, userId)
    router.push('/profile')
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="shadow-2xl rounded-2xl bg-white p-4">
          <h2 className='text-2xl mb-5'>One-step away from your account</h2>
          <form action={saveRole}>
            <select required name='role' className="select select-bordered w-full">
              <option disabled defaultChecked={true}>How can we describe you, {names}?</option>
              <option value={'planner'}>Event Planner/Organiser</option>
              <option value={'attendee'}>Attendee</option>
            </select>
            <button type="submit" className='btn btn-primary btn-sm mt-5 w-full'>Finish</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OnBoardForm