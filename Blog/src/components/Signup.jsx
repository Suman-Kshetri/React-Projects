import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { AuthService as authService} from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {login as authlogin }  from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './index'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("");
    const {register, handleSubmit} = useForm();
     

    const create = async (data) => {
      setError("");
      try {
        const userData = await authService.createAccount(data);
        if(userData)
        {
          const userData = await authService.getCurrentUser();
          if(userData)
          {
            dispatch(authlogin(userData));
            
          }
          navigate("/");
        }
      } catch (error) {
        setError(error.message);
        
      }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
              <div className="space-y-5">
                <Input
                label = "Full Name: "
                placeholder = "Enter your full name"
                {...register("name", {required:true})}
                />
                <Input
                                label="Email"
                                type='email'
                                placeholder='Enter your email'
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                    }
                                })}
                
                 />

                 <Input
                 label = "Password"
                 type = "password"
                 placeholder = "Enter your password"
                 {...register("password", {
                    required: true,
                    minLength:
                    {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    }
                 })}
                  />
                  <Button type='submit' 
                  className='w-full'
                  > Create Account</Button>
              </div>
            </form>
      </div>

    </div>
  )
}

export default Signup