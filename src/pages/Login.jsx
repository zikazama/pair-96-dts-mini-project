import LoginForm from "../layouts/LoginForm";

function Login() {
  return (
    <div className="Login">
      <div className="relative flex h-full w-full">
        <div className="h-screen w-1/2 bg-first-dark">
          <img
            alt="login"
            src="/assets/img/ProfilePicture.png"
            className="h-full w-full"
          />
        </div>
        <div className="h-screen w-1/2 bg-first-dark">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
