import React, { useEffect, useState } from 'react'
import LoggedTop from '../layout/LoggedTop';
import Footer from '../layout/Footer';
import '../assets/css/reservlist.css';
import { collection, deleteDoc, getDocs, query, where, doc } from 'firebase/firestore';
import { auth,db } from '../config/firebase';
import { useLocation } from 'react-router-dom';

const ReservList = () => {
    const [revList, setRevList] = useState([]);
    const location = useLocation();
    const user = auth.currentUser;
    const name = user.displayName;
    useEffect(()=>{
        getRevList();
    },[]);
    const getRevList = async()=>{
        try{
            const q = query(collection(db, 'reservations'), where('name', '==', name));
            const querySnap = await getDocs(q);
            setRevList(querySnap.docs.map((doc)=>({...doc.data(), id:doc.id})));
            console.log(querySnap);
        }catch(err){
            console.error(err);
        }
    }
    const deleteList = async(id)=>{
        const revDoc = doc(db, 'reservations', id);
        await deleteDoc(revDoc);
    }
  return (
    <>
    <LoggedTop/>
    <div className="container mb-5 d-flex flex-column min-vh-100">
        <div className="reserv-list">
            <h1 className="reserv-title">예약 내역</h1>
            {/*loop*/}
            {revList.map((rev,index)=>(
                <div className="list-box d-flex" key={index}>
                    <div className="col-10 list">
                        <div className="list-title mt-3">
                            <h4>{rev.mediName}</h4>
                        </div>
                        <div className="list-address">
                            {/* <p>경기 김포시 김포한강4로 113 신한프라자 602호</p> */}
                            <p>예약자 성함 : {rev.name}</p>
                        </div>
                        <div className="date mt-3">
                            {/* <p>12월 1일 (토) 오후 1:00</p> */}
                            <p>예약 날짜 : {rev.mediDate}</p>
                        </div>
                        </div>
                        <div className="col-2 relative">
                            <div className="list-del mt-4 absolute">
                                <button type='button' onClick={()=>{deleteList(rev.id); alert('예약이 취소되었습니다.'); window.location.replace('/reserv-list') }}>예약 취소</button>
                            </div>
                        </div>            
                </div>
            ))}

            {/*loop*/}
            {/* <div className="list-box mt-4 d-flex">
                <div className="col-10 list">
                    <div className="list-title mt-3">
                        <h4>굿모닝 내과</h4>
                    </div>
                    <div className="list-address">
                        <p>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                    </div>
                    <div className="date mt-3">
                        <p>12월 1일 (토) 오후 1:00</p>
                    </div>
                    </div>
                    <div className="col-2 relative">
                        <div className="list-del mt-4 absolute">
                            <button type='button'>예약 취소</button>
                        </div>
                    </div>            
            </div> */}

            {/*loop*/}
            {/* <div className="list-box mt-4 d-flex">
                <div className="col-10 list">
                    <div className="list-title mt-3">
                        <h4>굿모닝 내과</h4>
                    </div>
                    <div className="list-address">
                        <p>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                    </div>
                    <div className="date mt-3">
                        <p>12월 1일 (토) 오후 1:00</p>
                    </div>
                    </div>
                    <div className="col-2 relative">
                        <div className="list-del mt-4 absolute">
                            <button type='button'>예약 취소</button>
                        </div>
                    </div>            
            </div> */}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ReservList