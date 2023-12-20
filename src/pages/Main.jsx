import React, { useEffect } from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import Info from '../components/Info'
import Cservice from '../layout/Cservice';
import ApiList from '../components/ApiList'
import Popup from '../components/Popup'
import { auth } from '../config/firebase'



const Main = () => {
  const {isLogged} = useAuthValue();
  const user =auth.currentUser;
  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <div>
      {
        isLogged? (
        <>
          <LoggedTop/>
          <Search/>
          <Popup/>
          <ApiList/>
          <Info />
          <Cservice />
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <Popup/>
            <ApiList/>
            <Info />
            <Cservice />
            <Footer/>
          </>
        )
      }
       

    </div>
  )
}

export default Main