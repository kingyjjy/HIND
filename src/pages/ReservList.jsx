import React from 'react'
import LoggedTop from '../layout/LoggedTop';
import Footer from '../layout/Footer';
import '../assets/css/reservlist.css';

const ReservList = () => {
  return (
    <>
    <LoggedTop/>
    <div className="container mb-5">
        <div className="reserv-list">
            <h1 className="reserv-title">예약 내역</h1>
            {/*loop*/}
            <div className="list-box d-flex">
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
            </div>

            {/*loop*/}
            <div className="list-box mt-4 d-flex">
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
            </div>

            {/*loop*/}
            <div className="list-box mt-4 d-flex">
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
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ReservList