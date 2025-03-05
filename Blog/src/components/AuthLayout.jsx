//this is the mechanism with which we can protect our routes from unauthorized access.
 //we make a container which will be empty and that desides to show the values or not

import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status) //this will give the status of the user whether he is logged in or not

    useEffect(()=>{
        
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")

        }
        setLoader(false)
    }, [authStatus,navigate,authentication])
  return (
    loader ? <h1>Loading....</h1> : <>{children}</>
  )
}
