import React from 'react'
import { Link } from 'react-router-dom'
import { BsBookmarkStarFill } from "react-icons/bs";

import LoggedTop from '../layout/LoggedTop';
import Footer from '../layout/Footer';

const BookMark = () => {
  return (
    <>
        <LoggedTop/>
        <div className='container'>
            <div className="bookmark border-top pt-5">
                <h1 className="text-start fw-bold pb-5">즐겨찾기</h1>
                <div className="mx-5">
                    
                    {/* loop */}
                    <div className="d-flex justify-content-center">
                        <div className="col-3 border shadow-md rounded px-4 me-4 mb-5" >
                            <div className="bmicon text-end"><BsBookmarkStarFill size={35}/></div>
                            <h4 className='ps-3'>굿모닝 내과</h4>
                            <div className="bmimg justify-content-center d-flex">
                                <img src="images/hp001.png" alt="hp" className='img-fluid' style={{height:'150px'}}/>
                            </div>
                            <div className="hpaddress text-start px-3 my-3 text-sm">
                                <p><span>주소 : </span>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                                <p><span>tel : </span>031-8344-2323</p>
                            </div>
                            <div className="text-center">
                                <Link to="/reservation" className='btn btn-secondary text-white my-3'>예약하기</Link>
                            </div>
                        </div>
                       
                        <div className="col-3 border shadow-md rounded px-4  me-4 mb-5">
                            <div className="bmicon text-end"><BsBookmarkStarFill size={35}/></div>
                            <h4 className='ps-3'>굿모닝 내과</h4>
                            <div className="bmimg justify-content-center d-flex">
                                <img src="images/hp001.png" alt="hp" className='img-fluid' style={{height:'150px'}} />
                            </div>
                            <div className="hpaddress text-start px-3 my-3 text-sm">
                                <p><span>주소 : </span>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                                <p><span>tel : </span>031-8344-2323</p>
                            </div>
                            <div className="text-center">
                                <Link to="/reservation" className='btn btn-secondary text-white my-3'>예약하기</Link>
                            </div>
                        </div>
                        <div className="col-3 border shadow-md rounded px-4  me-4 mb-5" >
                            <div className="bmicon text-end"><BsBookmarkStarFill size={35}/></div>
                            <h4 className='ps-3'>굿모닝 내과</h4>
                            <div className="bmimg justify-content-center d-flex">
                                <img src="images/hp001.png" alt="hp" className='img-fluid' style={{height:'150px'}} />
                            </div>
                            <div className="hpaddress text-start px-3 my-3 text-sm">
                                <p><span>주소 : </span>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                                <p><span>tel : </span>031-8344-2323</p>
                            </div>
                            <div className="text-center">
                                <Link to="/reservation" className='btn btn-secondary text-white my-3'>예약하기</Link>
                            </div>
                        </div>
                        <div className="col-3 border shadow-md rounded px-4  me-4 mb-5" >
                            <div className="bmicon text-end"><BsBookmarkStarFill size={35}/></div>
                            <h4 className='ps-3'>굿모닝 내과</h4>
                            <div className="bmimg justify-content-center d-flex">
                                <img src="images/hp001.png" alt="hp" className='img-fluid' style={{height:'150px'}} />
                            </div>
                            <div className="hpaddress text-start px-3 my-3 text-sm">
                                <p><span>주소 : </span>경기 김포시 김포한강4로 113 신한프라자 602호</p>
                                <p><span>tel : </span>031-8344-2323</p>
                            </div>
                            <div className="text-center">
                                <Link to="/reservation" className='btn btn-secondary text-white my-3'>예약하기</Link>
                            </div>
                        </div>
                        
                    </div>
                    {/* /loop */}
    
                    
                </div>
                
            </div>
            
        </div>
       <Footer/>
    </>
  )
}

export default BookMark