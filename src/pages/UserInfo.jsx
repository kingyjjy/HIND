import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, query, getDoc,where, doc } from 'firebase/firestore'
import { db,auth } from '../config/firebase';
import { useAuthValue } from '../context/AuthProvider';

import LoggedTop from '../layout/LoggedTop'
import Footer from '../layout/Footer'
import NotLogin from './NotLogin';
import '../assets/css/userinfo.css'
import usericon from '../assets/images/usericon.png'

const UserInfo = () => {
    const {userinfo, isLogged} = useAuthValue();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchUser();
    },[]);
    const fetchUser = async()=>{
        try{
            // const userRef = collection(db, 'users');
            // const q = await getDocs(userRef);
            // console.log(q);

            // q.forEach((doc)=>{
            //     console.log(doc.id, doc.data());
            // })
            const user = auth.currentUser;
            const uid = user.uid;
            const email = user.email;
            const q = query(
                  collection(db, 'users'), where('email', '==', email)
                );
                const querySnapshot = await getDocs(q);
                // const info = querySnapshot.forEach((doc)=>{
                //   const data = doc.data();
                //   console.log(data);
                // });
                // setUsers(info);
                setUsers(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }catch(err){
            console.error(err);
        }
    }
    const showUser = users.map((user,index)=>(
        
        
        <div className='container'>
            <div  className="border-top">

                    <div key={index} className="userinfo mx-5">     
                        <div className="m-5 p-5 mx-auto border shadow-lg rounded">
                            <h2 className="text-center mb-5 border-bottom pb-4">내 정보</h2>
                            <div className="iconbox text-start mb-4 pb-4 mx-1" style={{borderBottom:'1px solid #efefef'}}>
                                <div className=''>
                                    <label className='col-3 mt-4 d-block'>사용자 이미지 : </label>
                                    <div className="rounded-circle mx-auto logo" style={{ width:'100px', height:'100px', overflow:'hidden', backgroundImage:`url(${usericon})`}}>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div  className="text-start mb-4">
                                <label className='col-2'>이름 : </label>
                                <input type="text" name="username" readOnly className='w-50' value={userinfo?.displayName} />
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>이메일 : </label>
                                <input type="text" name="username" readOnly className='' value={userinfo?.email}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>주소 : </label>
                                <input type="text" name="username" readOnly className='w-25 mb-2' value={user.zonecode}/>
                                <input type="text" name="username" readOnly value={user.address} style={{marginLeft:'11.5rem', marginBottom:'0.5rem'}}/>
                                <input type="text" name="username" readOnly value={user.detailaddress}  style={{marginLeft:'11.5rem'}}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>생년월일 : </label>
                                <input type="date" name="username" readOnly className='w-25' value={user.birth}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>전화번호 : </label>
                                <input type="text" name='tel' value={user.tel}/>
                            </div>
                            <div className='text-center mt-5'>
                                <Link to="/userinfo-edit" className='btn btn-lg btn-secondary text-white'>정 보 수 정</Link>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        
    
    ))
  return (
    <>
        <LoggedTop/>
        {showUser}
        <Footer/> 
    </>
  )
}

export default UserInfo