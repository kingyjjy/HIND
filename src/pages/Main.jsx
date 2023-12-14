import React from 'react'
import { useAuthValue } from '../context/AuthProvider'
import TopNav from '../layout/TopNav'
import LoggedTop from '../layout/LoggedTop'
import Search from '../layout/Search'
import Footer from '../layout/Footer'
import Info from '../components/Info'
import ApiList from '../components/ApiList';
import CService from '../layout/Cservice';
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
          <Popup/>
          <ApiList/>
          <Info />
          <CService/>
          <Footer/>
        </>
        ):(
          <>
            <TopNav/>
            <Search/>
            <Popup/>
            <ApiList/>
            <Info />
            <CService/>
            <Footer/>
          </>
        )
      }
       

    </div>
  )
}

export default Main