import React from 'react'
import { useLocation } from 'react-router-dom'
import TopNav from '../layout/TopNav';

const Reservation = () => {
    const location = useLocation();
    console.log(location)
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
                        <div className="res-hos-name">
                            <input type="text" placeholder={location.state.title}  readOnly/>
                        </div>
                        <div className="res-name">
                            <input type="text" name='res-name' placeholder='예약자명' />
                        </div>
                        <div className="birth">
                            <div className="info" id='info-birth'>
                                <div className='box d-flex' id='birth-year'>
                                    <input type='text' placeholder='YYYY' maxlength='4' style={{width:"80%", marginRight:"5px"}}/>
                                    <input type='text' placeholder='MM' maxlength='2' style={{width:"80%", marginRight:"5px"}}/>
                                    <input type='text' placeholder='DD' maxlength='2' style={{width:"80%", marginRight:"5px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="tel">
                            <input type="text" name='res-tel' placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" />
                        </div>
                        <div className="res-date">
                            <input type="date" name='res-date' />
                        </div>
                        <div className="res-success">
                            <button>예약하기</button>
                        </div>
                    </div>                    
                </div>
                <div className="col-3"></div>
            </div>
    </div>
    </form>
    </>
  )
}

export default Reservation