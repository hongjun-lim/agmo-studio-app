import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import userData from './login.json';

type FormValues = {
  email: string;
  password: string;
};

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const [getEmail, setEmail] = useState('');
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email address format wrong').required('* Required field'),
    password: Yup.string().min(8, 'Password must be minimum 8 characters').required('* Required field'),
  });

  function handleUserData(data: FormValues) {
    if (data.email !== userData.email || data.password !== userData.password) {
      alert('Email address or password incorrect');
    } else {
      alert('Login Success');
      localStorage.setItem('@user', JSON.stringify(data));
    }
  }

  function handleRememberMe() {
    const user = localStorage.getItem('@user');
    localStorage.setItem('@isChecked', JSON.stringify(isChecked));
    const checkboxValue = localStorage.getItem('@isChecked');

    if (user) {
      const userDetail = JSON.parse(user);
      setEmail(userDetail.email);
    }
    if (!isChecked) {
      console.log(checkboxValue);
      setIsChecked(true);
    } else {
      console.log(checkboxValue);
      setIsChecked(false);
      setEmail('');
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={(values: FormValues, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <div className='flex flex-col lg:flex-row justify-start '>
          <div className='bg-neutral-600 relative lg:w-7/12 h-48 lg:h-screen'>
            <img
              src='/images/agmo-banner.svg'
              alt=''
              className='mix-blend-overlay absolute w-full h-full object-cover'
            />
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
                  value={isChecked ? getEmail : values.email}
                  className='rounded-md bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                />
                <ErrorMessage name='email' render={(msg) => <span className='text-red-400'>{msg}</span>} />
                <Field
                  type='password'
                  name='password'
                  value={values.password}
                  className='rounded-md bg-blue-100 mt-5 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                />
                <ErrorMessage name='password' render={(msg) => <span className='text-red-400'>{msg}</span>} />
              </div>
              <div className='flex flex-row justify-start relative'>
                <input
                  type='checkbox'
                  name='rememberMe'
                  className='mr-2 my-4 border-2'
                  onChange={handleRememberMe}
                  checked={isChecked}
                />
                <p className='mt-3 absolute left-7'>Remember Me</p>
                <a href='#' className='no-underline mt-3 absolute right-0'>
                  Forget Your Password?
                </a>
              </div>
              <button
                type='submit'
                value='name'
                className='mt-10 border-solid border-2 border-black rounded-lg px-3 py-2 bg-black text-white font-semibold'
                onClick={() => {
                  handleUserData(values);
                }}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}
