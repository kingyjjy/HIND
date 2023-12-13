import React from 'react'
import {RiKakaoTalkLine,RiGithubFill,RiInstagramLine,RiTwitterXFill,RiGlobalLine,RiHome4Fill,RiMailFill,RiPhoneLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='footer py-5 mt-auto bg-secondary'>
        <div className="container text-center text-lg-start">
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className="me-5 d-none d-lg-block">
                    <span className='text-white fs-6'>우리가 만든 홈페이지를 구경해보시고 연락주세요!!</span>
                </div>
                <div>
                    <a href="#" className="me-4 link text-white"><RiKakaoTalkLine size={25}/></a>
                    <a href="#" className="me-4 link text-white" ><RiGithubFill size={25}/></a>
                    <a href="#" className="me-4 link text-white"><RiInstagramLine size={25}/></a>
                    <a href="#" className="me-4 link text-white"><RiTwitterXFill size={25}/></a>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                <RiGlobalLine size={28}/> 우리동네 병원찾기
                            </h6>
                            <p className='text-white'>
                                바로 여기에 당신들이 애타게찾던 개발자가있습니다! 이 개발자들은 백앤드와 프론트앤드까지 겸비한 실력자들! 놓치면 후회할것!
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">
                                My Page
                            </h6>
                            <p><a href="#" className="link text-white font-weight-light">내 정보</a></p>
                            <p><a href="#" className="link text-white font-weight-light">즐겨찾기</a></p>
                            <p><a href="#" className="link text-white font-weight-light">예약내역</a></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-white fs-4">Contact</h6>
                            <p className='text-white'><RiHome4Fill/> 대한민국, 경기도 김포시</p>
                            <p className='text-white'><RiMailFill/> email@gmail.com</p>
                            <p className='text-white'><RiPhoneLine/> 010 - 1234 - 1213</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4 text-light opacity-75">COPYRIGHT &copy; 2023<strong> HIND ALL RIGHT RESERVED</strong> </div>
        </div>
    </footer>
  )
}

export default Footer