import Link from 'next/link';
// import styles from './login.module.css';

/* eslint-disable-next-line */
export interface LoginProps { }

export function Login(props: LoginProps) {
  return (
    <div className="flex min-h-screen">

      <div className="flex flex-row w-full">

        <div className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8"></span>
            <a href="#" className="font-medium text-xl">ADPList</a>
          </div>
          <div className='space-y-5'>
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new
              experiences</h1>

          </div>
          <p className="font-medium">© 2023 AdpList</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-6 h-6"></span>
              <a href="#" className="font-medium text-lg">Brand</a>
            </div>
            <div className="flex items-center space-x-2">
              <span>Not a member? </span>
              <a href="#" className="underline font-medium text-[#070eff]">
                Sign up now
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
              <p className="text-md md:text-xl">log in to view profile info</p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <Link href="/api/auth/login">
                <button className="w-full flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;
