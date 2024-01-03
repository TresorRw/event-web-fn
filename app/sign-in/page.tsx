const SignInPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title text-2xl border-b-2">TresEvents</h2>
              <p>Sign into your account</p>
              <form className="mt-5">
                <div className="label">
                  <span className="label-text-alt">Email</span>
                </div>
                <input type="email" className="input input-sm input-bordered w-full" />
                <div className="label">
                  <span className="label-text-alt">Password</span>
                </div>
                <input type="password" className="input input-sm input-bordered w-full" />
                <button type="submit" className="btn btn-sm mt-5 w-full btn-primary">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage