import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import{Button, Input, RTE, Select} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm() {
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    const {register,handleSubmit,watch, setValue,control, getValues} = useForm({
        defaultValues: {
            title: "",
            
        }
    })

  return (
    <div>PostForm</div>
  )
}

export default PostForm