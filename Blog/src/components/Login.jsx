import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {login as authLogin,logout as authLogout} from '../store/authSlice'
import {Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const login = async (data) => {
    setError("");
    console.log("Login Data: ",data)
    try {
        const session = await authService.login(data);
        if(session){
            const userData = await authService.getCurrentUser();
            if(userData){
            dispatch(authLogin(userData));
            }
            navigate("/");
            //if we use link then we can directly navigate but if we use link then we have to click on the button to navigate

        }
    } catch (error) {
        setError(error.message);
}}

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("")

  return (
    <div
    className='w-full h-screen flex justify-center items-center'
    >
        <div 
        className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'
        >
            <div
            className='mb-2 flex justify-center'
            >
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%" />
                </span>

            </div>
            <h2 className='text-center text-2xl font-bold leading-tight'>
                Sign in to your Account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'> 
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
                 {
                    ...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        }
                    })
                 }
                 />
                 <Button
                 type="submit"
                 className="w-full"
                 >
                    Sign in
                 </Button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default Login