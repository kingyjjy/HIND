import React from 'react'
import { Link } from 'react-router-dom'

import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'

const NotLogin = () => {
  return (
    <>
        <TopNav/>
        <div className="container">
            <hr />
            <div className='border shadow-lg  rounded mx-auto mb-3 px-4' style={{width:'500px', height:'600px'}}>
            <div className="text-end mt-3"><Link to='/' className="btn btn-close"></Link></div>
                <div className="text-center p-5" style={{marginTop:'20px'}}>
                    <img src="images/notlogin.png" alt="isnotlogin" style={{width:'150px', height:'150px'}}/>
                    <h4 className='mt-4' style={{fontWeight:'800'}}>로그인이 필요한 서비스 입니다.</h4>
                    <h5 className='py-2'>로그인 후 이용해주세요!</h5>
                    <Link to='/login' className='btn btn-primary mt-5'>로그인 하기</Link>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default NotLogin