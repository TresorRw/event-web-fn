import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage