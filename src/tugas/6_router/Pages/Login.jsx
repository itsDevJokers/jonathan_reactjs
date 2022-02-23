import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input'
import * as Validator from 'validatorjs';
import { Rings } from 'react-loader-spinner';

const Login = ({ user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {email, password};
    const rules = {
      email: 'required|email',
      password: ['required', 'regex:/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm'],
    };

    let validation = new Validator(data, rules, {
      regex: 'Password min 8 characters with at least 1 letter, 1 number and 1 special character'
    });

    validation.passes(() => navigate('/'));

    setErrors([
      ...validation.errors.get('email'),
      ...validation.errors.get('password'),
    ])

    setTimeout(() => setErrors([]), 2000);

    user({
        email,
        password
    })
  }

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      setLoading(false)
    }, 1500);

    return () => { isMounted = false }
  }, [])
  
  

  return (
    <div className="w-full max-w-xs mx-auto my-20">
        {loading && (
            <div className='flex justify-center'>
              <Rings color="#0092ff" height={200} width={200} />
            </div>
        )}
        {!loading && (
          <form className="bg-blue-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <ShowErrors errors={errors} />
          <div className="mb-4">
            <Input label="Email" type="email" placeholder="Email" onChange={(email) => setEmail(email)}/>
          </div>
          <div className="mb-6">
            <Input label="Password" type="password" placeholder="****" onChange={(password) => setPassword(password)}/>
          </div>
          <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                Login
                </button>
            <p className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </p>
          </div>
        </form>
        )}
        
        </div>
  )
}

const ShowErrors = ({errors}) => {
  return (
      <div>
          {
              errors.map((error,i) => <p key={i} className="pb-2 text-red-600 text-sm italic font-semibold">{error}</p>)
              
          }
      </div>
  )
}



export default Login