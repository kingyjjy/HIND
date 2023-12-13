import React from 'react'
import { useAuthValue } from '../context/AuthProvider'

import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import ApiList from '../components/ApiList'
import Info from '../components/Info'
import Cservice from '../layout/Cservice'


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
          <Cservice />
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <ApiList />
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