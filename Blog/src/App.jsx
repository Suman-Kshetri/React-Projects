import { useState, useEffect, StrictMode } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  //to check if the user is logged in or not 
  // i.e: if loading then user is not logged in else user is logged in and data is shown
  const [loading, setloading] = useState(true);
  // dispatch is used to dispatch an action to the reducer to update the state of the application 
  const dispatch = useDispatch();
  //when the application loads then useEffect to ask the service if the user is logged in or not
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      //if the user is logged in then dispatch an action to load their data into the Redux store when the app starts.
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout());
      }
    })
    .finally( () => {
      setloading(false);
    })

  },[])

  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <StrictMode>
      <Header/>
      <main>
        Hello
        <Outlet/>
      </main>
      <Footer/>
  </StrictMode>
    </div>
  </div>
  ) :null;
}

export default App
