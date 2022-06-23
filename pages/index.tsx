import AgmoBanner from '../pages/assets/agmo-banner.svg';
import AgmoLogo from '../pages/assets/agmo-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex flex-row justify-start'>
        <div className='bg-neutral-600 relative w-7/12 h-screen'>
          <AgmoBanner className='mix-blend-overlay absolute w-full h-screen'/>
          <AgmoLogo className='absolute mt-430 ml-490'/>
        </div>
        <div className='justify-around mx-10 basis-1/4'>
          <p className='font-bold text-3xl px-10 pt-72 pb-10'>Hello, <br /> Welcome Back</p>
          <form className='max-w-4xl'>
            <div className='flex flex-col ml-10'>
              <input type='text' name='email' className='rounded-md bg-blue-100'/>
              <input type='password' name='password' className='rounded-md bg-blue-100 mt-5'/>
            </div>
            <div className='flex flex-row justify-around ml-10'>
              <input type='checkbox' name='remember' className='my-4 border-2'/><p className='mt-3 mr-32'>Remember Me</p>
              <a href='#' className='mt-3 no-underline'>Forget Your Password?</a>
            </div>
            <button type='submit' value='Submit' className='ml-10 mt-10 border-solid border-2 border-black rounded-md px-3 py-2 bg-black text-white font-semibold'>Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}
