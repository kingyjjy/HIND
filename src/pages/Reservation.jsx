

import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoggedTop from '../layout/LoggedTop';
import Footer from '../layout/Footer';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropdown,IoIosArrowDropup } from "react-icons/io";
import '../assets/css/reservation.css';
// import Calendar from '../components/Calendar';
import Accordion from '../components/Accordion';
import { QuerySnapshot, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../config/firebase';


const Reservation = () => {
    const location = useLocation();
    const [visible, setVisible] = useState('');
    const [mediName, setMediName] = useState(location.state.title);
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [birth, setBirth] = useState('');
    const [mediDate, setMediDate] = useState('');
    const [mediTime, setMediTime] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [users, setUsers] = useState([]);
    const nav = useNavigate();
    const user = auth.currentUser;
    const uid = user.uid;
    console.log(user);
    useEffect(()=>{
        getUser();
    },[]);
    const getUser = async()=>{
        try{   
            const q = query(collection(db, 'users'), where('uid', '==', uid));
            const querySnapshot = await getDocs(q);
            setUsers(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
            console.log(querySnapshot);
        }catch(err){
            console.error(err);
        }
    }

    const checkhandler = ({target})=>{
        if(target.checked){
            setIsChecked(true);
            console.log(true);
        }else{
            setIsChecked(false);
            console.log(false);
        }
    }
    
    const reserv =async()=>{
        await addDoc(collection(db, 'reservations'),{
            mediName,
            name:users[0].name,
            tel:tel,
            birth:birth,
            mediDate,
            mediTime
           })
        
    }
    const handleReserv = async(e)=>{
        e.preventDefault();
        try{
            reserv();
            alert('예약이 완료되었습니다.');
            nav('/reserv-list')
        }catch(err){
            console.error('reservation error : ',err);
        }
    }
    const chkhandleReserv = async(e)=>{
        e.preventDefault();
        try{
            // const res = await getDocs(query(collection(db,'users'),where('uid','==',uid)))
            // const userInfo = await res.data.map((rowdata)=>({
            //     mediName,
            //     name:rowdata.name,
            //     tel:rowdata.tel,
            //     birth:rowdata.birth,
            //     mediDate,
            //     mediTime
            // }))
            await addDoc(collection(db, 'reservations'), {
                mediName,
                name:users[0].name,
                tel:users[0].tel,
                birth:users[0].birth,
                mediDate,
                mediTime
            })
            
            alert('예약이 완료되었습니다.');
            nav('/reserv-list')
        }catch(err){
            console.error('reservation error : ',err);
        }
    }


  return (
    <>
    <LoggedTop/>
        <form action="/reservation" >
            <div className="container">
                       
                <div className="col-12 d-flex">
                    <div className="col-3"></div>
                     {users.map((u,index)=>(   
                        <div key={index} className="col-6 res">               
                        <div className="res-box" >
                            <h2 className='text-center res-title'>진료 예약</h2>
                            <div className="">
                                <input type="checkbox" value='check' onClick={checkhandler} style={{width:'30px'}}/>회원정보 가져오기
                            </div>
                            {isChecked ? (
                                <div>
                                <div className="res-hos-name">
                                    <input type="text" placeholder={location.state.title} value={mediName} readOnly />
                                </div>
                                <div className="res-name">
                                    <input type="text" name='res-name' placeholder='예약자명' readOnly value={u.name} onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className="tel">
                                    <input type="text" name='res-tel' placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" value={u.tel} onChange={(e)=>setTel(e.target.value)}/>
                                </div>
                                <div className="res-birth">
                                    <input type="date" data-placeholder="출생년도-월-일" required aria-required="true" value={u.birth} onChange={(e)=>setBirth(e.target.value)}/>
                                </div>
                                <div className="res-accordion">
                                    <input type="date" data-placeholder="진료일 선택" required aria-required="true" value={mediDate} onChange={(e)=>setMediDate(e.target.value)}/>
                                </div>

                                <div className="cho-time">
                                    <span>시간 선택
                                <a onClick={()=>{ 
                                    setVisible(!visible);
                                }}
                                >
                                    {visible ? <IoIosArrowDropup size={20}/> : <IoIosArrowDropdown size={20}/>}
                                </a>
                                </span></div>
                                {visible && <Accordion value={mediTime} onChange={(e)=>setMediTime(e.target.value)}/>}
                                <div className="res-success">
                                    <button onClick={chkhandleReserv}>예약하기</button>
                                </div>
                            </div>
                            ):(
                                <div>
                                    <div className="res-hos-name">
                                        <input type="text" placeholder={location.state.title} value={mediName} readOnly/>
                                    </div>
                                    <div className="res-name">
                                        <input type="text" name='res-name' placeholder='예약자명' readOnly value={u.name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                    <div className="tel">
                                        <input type="text" name='res-tel' placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                                    </div>
                                    <div className="res-birth">
                                        <input type="date" data-placeholder="출생년도-월-일" required aria-required="true" value={birth} onChange={(e)=>setBirth(e.target.value)}/>
                                    </div>
                                    <div className="res-accordion">
                                        <input type="date" data-placeholder="진료일 선택" required aria-required="true" value={mediDate} onChange={(e)=>setMediDate(e.target.value)}/>
                                    </div>
    
                                    <div className="cho-time">
                                        <span>시간 선택
                                    <a onClick={()=>{ 
                                        setVisible(!visible);
                                    }}
                                    >
                                        {visible ? <IoIosArrowDropup size={20}/> : <IoIosArrowDropdown size={20}/>}
                                    </a>
                                    </span></div>
                                    {visible && <Accordion value={mediTime} onChange={(e)=>setMediTime(e.target.value)}/>}
                                    <div className="res-success">
                                        <button onClick={handleReserv}>예약하기</button>
                                    </div>
                                </div>
                            )
                                
                            }
                            
                        </div>                    
                    </div>
                     ))}  
                    <div className="col-3"></div>
                </div>
                   
            </div>
        </form>
    <Footer />
    </>
  )
}

export default Reservation