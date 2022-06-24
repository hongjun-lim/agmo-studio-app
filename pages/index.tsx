import AgmoBanner from '../pages/assets/agmo-banner.svg';
import AgmoLogo from '../pages/assets/agmo-logo.svg'

export default function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:justify-start '>
        <div className='bg-neutral-600 lg:relative lg:w-7/12 lg:h-screen'>
          <AgmoBanner className='mix-blend-overlay lg:absolute lg:w-full lg:h-screen'/>
          <AgmoLogo className='lg:absolute lg:mt-430 lg:ml-490'/>
        </div>
        <div className='justify-between lg:justify-around lg:mx-10 lg:basis-1/4'>
          <div className='font-semibold text-3xl px-10'>
            <p className='pt-72 lg:pt-64 pb-3'>Hello,</p>
            <p className='pb-16'> Welcome Back</p>
          </div>
          <form className='max-w-4xl lg:ml-10'>
            <div className='flex flex-col'>
              <input type='text' name='email' className='rounded-md bg-blue-100'/>
              <input type='password' name='password' className='rounded-md bg-blue-100 mt-5'/>
            </div>
            <div className='flex flex-row justify-betweeen lg:justify-around'>
              <input type='checkbox' name='remember' className='my-4 border-2'/><p className='mt-3 mr-32'>Remember Me</p>
              <a href='#' className='no-underline lg:mt-3'>Forget Your Password?</a>
            </div>
            <button type='submit' value='Submit' className='ml-10 mt-10 border-solid border-2 border-black rounded-lg px-3 py-2 bg-black text-white font-semibold'>Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}
