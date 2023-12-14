import React from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import Info from '../components/Info'



const Main = () => {
  const {isLogged} = useAuthValue();
  return (
    <div>
      {
        isLogged? (
        <>
          <LoggedTop/>
          <Search/>
          <Info />
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <Info />
            <Footer/>
          </>
        )
      }
       

    </div>
  )
}

export default Main