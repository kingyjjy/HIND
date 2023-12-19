import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from '../layout/TopNav';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropdown,IoIosArrowDropup } from "react-icons/io";
import '../assets/css/reservation.css';
import Calendar from '../components/Calendar';
import Accordion from '../components/Accordion';

const Reservation = () => {
    const location = useLocation();

  return (
    <>
    <TopNav/>
    <form action="/reservation">
    <div className="container">        
        <div className="col-12 d-flex">
                <div className="col-3"></div>
                <div className="col-6 res">
                    <div className="res-box">
                    <h2 className='text-center res-title'>진료 예약</h2>
                        <div className="">
                            <input type="checkbox" value='check' />회원정보 가져오기
                        </div>
                        <div className="res-hos-name">
                            <input type="text" placeholder={location.state.title}  readOnly/>
                        </div>
                        <div className="res-name">
                            <input type="text" name='res-name' placeholder='예약자명' />
                        </div>
                        <div className="tel">
                            <input type="text" name='res-tel' placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" />
                        </div>
                        <div className="res-birth">
                            <input type="date" data-placeholder="출생년도-월-일" required aria-required="true" />
                        </div>
                        <div className="res-accordion">
                            <input type="date" data-placeholder="진료일 선택" required aria-required="true"/>
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
                        {visible && <Accordion />}
                        <div className="res-success">
                            <button>예약하기</button>
                        </div>
                    </div>                    
                </div>
                <div className="col-3"></div>
            </div>
            {/* <Footer/> */}
    </div>
    </form>
    </>
  )
}

export default Reservation