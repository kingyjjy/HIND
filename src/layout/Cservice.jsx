import React from 'react'
import '../assets/css/cservice.css';

const Cservice = () => {
  return (
    <div className='main-service'>
    <div className="container">
            <div className="service d-flex">
                <div className='col-6 faq'>
                    <span class="material-symbols-outlined faq-icon">contact_support</span>
                    <p className='faq-text'>FAQ</p>
                    <p className='faq-sectext'>사용자들이 자주하는 질문과 답변을 확인해보세요!</p>
                </div>
                <div className="line"></div>
                <div className='col-6 notice'>
                    <span className="material-symbols-outlined">unknown_document</span>
                    <p className='notice-text'>공지사항</p>
                    <p className='notice-sectext'>
                        서비스 안내 등 다양한 소식을 확인해보세요!
                    </p>
                </div>
            </div>
    </div>
   </div>
  )
}

export default Cservice