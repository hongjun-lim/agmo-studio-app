import { useRouter } from 'next/router';

export default function Dashboard(): JSX.Element {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('@user');

    router.push('/');
  };
  return (
    <div>
      <title>Dashboard</title>
      <p className='text-center text-4xl'>Dashboard</p>
      <div className='flex flex-row justify-center'>
        <button
          type='submit'
          onClick={logOut}
          className='mt-10 border-solid border-2 border-black rounded-lg px-3 py-2 bg-black text-white font-semibold'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
