import React from 'react'
import {RiKakaoTalkLine,RiGithubFill,RiInstagramLine,RiTwitterXFill,RiGlobalLine,RiHome4Fill,RiMailFill,RiPhoneLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-secondary'>
        <div className="container text-center text-lg-start">
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className="me-5 d-none d-lg-block">
                    <span>우리가 만든 홈페이지를 구경해보시고 연락주세요!!</span>
                </div>
                <div>
                    <Link to="#" className="me-4 link"><RiKakaoTalkLine size={25}/></Link>
                    <Link to="#" className="me-4 link"><RiGithubFill size={25}/></Link>
                    <Link to="#" className="me-4 link"><RiInstagramLine size={25}/></Link>
                    <Link to="#" className="me-4 link"><RiTwitterXFill size={25}/></Link>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <RiGlobalLine size={20}/> 우리동네 병원찾기
                            </h6>
                            <p>
                                바로 여기에 당신들이 애타게찾던 개발자가있습니다! 이 개발자들은 백앤드와 프론트앤드까지 겸비한 실력자들! 놓치면 후회할것!
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                My Page
                            </h6>
                            <p><Link to="#" className="link">내 정보</Link></p>
                            <p><Link to="#" className="link">즐겨찾기</Link></p>
                            <p><Link to="#" className="link">예약내역</Link></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><RiHome4Fill/> 대한민국, 경기도 김포시</p>
                            <p><RiMailFill/> email@gmail.com | email@naver.com</p>
                            <p><RiPhoneLine/> 010-1234-1213 | 010-3212-3212</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">&copy;2023 copyright:<strong>hospitalweb</strong> </div>
        </div>
    </footer>
  )
}

export default Footer