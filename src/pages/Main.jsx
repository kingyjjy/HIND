import React from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'

import Info from '../components/Info'
import Cservice from '../layout/Cservice';
import Popup from '../components/Popup';


const Main = () => {
  const {isLogged} = useAuthValue();
  return (
    <div>
      {
        isLogged? (
        <>
          <LoggedTop/>
          <Search/>
          <ApiList />
          <Info />
          <Cservice/>
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <ApiList />
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