import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import userData from './api/login.json';
import { DASHBOARD } from './settings/constants';

type FormValues = {
  email: string;
  password: string;
};

export default function Home() {
  const context = require('../pages/api/login.json');
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email address format wrong').required('* Required field'),
    password: Yup.string().min(8, 'Password must be minimum 8 characters').required('* Required field'),
  });

  function initialRoute() {
    const user = localStorage.getItem('@user');

    if (user) {
      let initialRoute = DASHBOARD;

      router.push(initialRoute);
    }
  }

  useEffect(() => {
    initialRoute();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  function handleCheckbox() {
    if (!isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  const onSubmit = async (values: FormValues) => {
    const result = await userData;

    if (result) {
      if (result.email === values.email) {
        localStorage.setItem('@user', JSON.stringify(values.email));
      }

      initialRoute();

      const timeout = setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        clearTimeout(timeout);
      }, 1000);
    }
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={ValidationSchema}>
      <div className='flex flex-col lg:flex-row justify-start '>
        <div className='bg-neutral-600 relative lg:w-7/12 h-48 lg:h-screen'>
          <img src='/images/agmo-banner.svg' alt='' className='mix-blend-overlay absolute w-full h-full object-cover' />
          <img
            src='/images/agmo-logo.svg'
            alt=''
            className='absolute object-cover mt-14 ml-40 w-40 lg:mt-96 lg:ml-470 lg:w-auto'
          />
        </div>
        <div className='lg:mx-10 lg:basis-1/4'>
          <div className='font-semibold text-3xl px-10'>
            <p className='pt-32 lg:pt-64 pb-3'>Hello,</p>
            <p className='pb-16'>Welcome Back</p>
          </div>
          <form className='px-10 lg:px-0 lg:ml-10'>
            <div className='flex flex-col justify-between'>
              <Field
                type='email'
                name='email'
                autoComplete='email'
                className='rounded-md bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
              <ErrorMessage name='email' render={(msg) => <span className='text-red-400'>{msg}</span>} />
              <Field
                type='password'
                name='password'
                autoComplete='password'
                className='rounded-md bg-blue-100 mt-5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              />
              <ErrorMessage name='password' render={(msg) => <span className='text-red-400'>{msg}</span>} />
            </div>
            <div className='flex flex-row justify-start relative'>
              <Field
                type='checkbox'
                name='rememberMe'
                className='mr-2 my-4 border-2'
                onChange={handleCheckbox}
                checked={isChecked}
              />
              <p className='mt-3 absolute left-7'>Remember Me</p>
              <a href='#' className='no-underline mt-3 absolute right-0'>
                Forget Your Password?
              </a>
            </div>
            <button
              type='submit'
              className='mt-10 border-solid border-2 border-black rounded-lg px-3 py-2 bg-black text-white font-semibold'
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </Formik>
  );
}
