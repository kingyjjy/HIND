import React, { useEffect } from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import Info from '../components/Info'
import Cservice from '../layout/Cservice';
<<<<<<< HEAD
import Popup from '../components/Popup';

=======
import ApiList from '../components/ApiList'
import Popup from '../components/Popup'
import { auth } from '../config/firebase'
>>>>>>> a8e63f98a632e4a42d1a4d0c6dcf1fabfb0e7604

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
<<<<<<< HEAD
          <ApiList />
=======
          <Popup/>
          <ApiList/>
>>>>>>> a8e63f98a632e4a42d1a4d0c6dcf1fabfb0e7604
          <Info />
          <Cservice/>
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
<<<<<<< HEAD
            <ApiList />
=======
            <Popup/>
            <ApiList/>
>>>>>>> a8e63f98a632e4a42d1a4d0c6dcf1fabfb0e7604
            <Info />
            <Cservice/>
            <Footer/>
          </>
        )
      }
       

    </div>
  )
}

export default Main