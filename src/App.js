import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth'
import {auth, db} from './config/firebase'
import { AuthProvider } from './context/AuthProvider';
import { collection, getDocs, where, query, serverTimestamp } from 'firebase/firestore';
import PrivateRoute from './context/PrivateRoute';
import Main from './pages/Main'
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import Register from './pages/Register';
import TopNav from './layout/TopNav';
import Footer from './layout/Footer';
import BookMark from './pages/BookMark';
import NotLogin from './pages/NotLogin';
import LoggedTop from './layout/LoggedTop';
import UserinfoEdit from './pages/UserinfoEdit';
import ImageMap from './pages/ImageMap';
import HealthInfo from './pages/HealthInfo';
import InfoDetail from './pages/InfoDetail';
import Reservation from './pages/Reservation';
import ReservList from './pages/ReservList';
import ObjList from './components/ObjList';



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

        <Routes>
          {/* {isLogged?(<Route path='/' element={<><LoggedTop/><Main/><Footer/></>}></Route>):(<Route path='/' element={<><TopNav/><Main/><Footer/></>}></Route>)} */}
          {/* {isLogged?(<Route path='/' element={<><PrivateRoute><LoggedTop/></PrivateRoute><Main/><Footer/></>}></Route>):(<Route path='/' element={<><TopNav/><Main/><Footer/></>}></Route>)} */}
          <Route path='/' element={<ImageMap/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register userinfo={userinfo} isLogged={isLogged}/>}/>
          <Route path='/notlogin' element={<NotLogin/>}/>
          <Route path='/healthinfo' element={<HealthInfo/>}/>
          <Route path='/detail' element={<InfoDetail/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/reserv-list' element={<ReservList/>}/>
          <Route path='/objlist' element={<ObjList/>}/>
          {/* {isLogged ?(<Route path='/info' element={<UserInfo/>}/>):(<Route path='/info' element={<NotLogin/>}/>)} */}
          {/* <Route path='/info' element={<UserInfo/>}/> */}
          {isLogged ? (<Route path='/info' element={<UserInfo/>}/>):(<Route path='/info' element={<NotLogin/>}/>)}
          {isLogged ? (<Route path='/userinfo-edit' element={<UserinfoEdit userinfo={userinfo} isLogged={isLogged}/>}/>):(<Route path='/userinfo-edit' element={<NotLogin/>}/>)}
          {/* <Route path='/userinfo-edit' element={
            <PrivateRoute>
              <UserinfoEdit/>
            </PrivateRoute>
          }/> */}
          {isLogged ?(<Route path='/bookmark' element={<BookMark/>}/>):(<Route path='/bookmark' element={<NotLogin/>}/>)}
          {/* <Route path='/bookmark' element={<BookMark/>}/> */}
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App