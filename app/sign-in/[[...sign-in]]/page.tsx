import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default SignInPage