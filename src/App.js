import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './config/firebase'
import { AuthProvider } from './context/AuthProvider';

import Main from './pages/Main'
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import Register from './pages/Register';
import BookMark from './pages/BookMark';
import NotLogin from './pages/NotLogin';
import UserinfoEdit from './pages/UserinfoEdit';
import SearchList from './pages/SearchList';
import HealthInfo from './pages/HealthInfo';
import ReservList from './pages/ReservList';
import ObjList from './components/ObjList'
import ImageMap from './pages/ImageMap';
import InfoDetail from './pages/InfoDetail'
import Reservation from './pages/Reservation'
import SearchApi from './components/SearchApi';
import TopButton from './components/TopButton'


const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userinfo, setUserinfo] = useState(null); 

  const user = auth.currentUser;
  
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        const uid = user.uid;   
        setUserinfo(user);   
        setIsLogged(true);
      }else{
        setIsLogged(false);
      }
    });
  },[]);


  return (
    <Router>
      <AuthProvider value={{userinfo, isLogged}}>
        <TopButton />
        <Routes>
          <Route path='/' element={<ImageMap/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register userinfo={userinfo} isLogged={isLogged}/>}/>
          <Route path='/notlogin' element={<NotLogin/>}/>
          {/* <Route path='/searchlist' element={<SearchList/>}/> */}
          <Route path='/searchapi' element={<SearchApi/>}/>
          <Route path='/healthinfo' element={<HealthInfo/>}/>
          <Route path='/detail' element={<InfoDetail/>}/>
          {isLogged ? (<Route path='/reservation' element={<Reservation/>}/>):(<Route path='/reservation' element={<NotLogin/>}/>)}
          {isLogged ? (<Route path='/reserv-list' element={<ReservList/>}/>):(<Route path='/reserv-list' element={<NotLogin/>}/>)}
          <Route path='/objlist' element={<ObjList/>}/>
          {isLogged ? (<Route path='/info' element={<UserInfo/>}/>):(<Route path='/info' element={<NotLogin/>}/>)}
          {isLogged ? (<Route path='/userinfo-edit' element={<UserinfoEdit userinfo={userinfo} isLogged={isLogged}/>}/>):(<Route path='/userinfo-edit' element={<NotLogin/>}/>)}
          {isLogged ?(<Route path='/bookmark' element={<BookMark/>}/>):(<Route path='/bookmark' element={<NotLogin/>}/>)}
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App