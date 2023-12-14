import React from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'

import Info from '../components/Info'
<<<<<<< HEAD
import ApiList from '../components/ApiList';
import CService from '../layout/Cservice';
import Popup from '../components/Popup';
=======
import Cservice from '../layout/Cservice'
>>>>>>> b843d7a0389ec681f7fed39e928f21171c47b78f


const Main = () => {
  const {isLogged} = useAuthValue();
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
<<<<<<< HEAD
          <CService/>
=======
          <Cservice />
>>>>>>> b843d7a0389ec681f7fed39e928f21171c47b78f
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <Popup/>
            <ApiList/>
            <Info />
<<<<<<< HEAD
            <CService/>
=======
            <Cservice />
>>>>>>> b843d7a0389ec681f7fed39e928f21171c47b78f
            <Footer/>
          </>
        )
      }
       

    </div>
  )
}

export default Main