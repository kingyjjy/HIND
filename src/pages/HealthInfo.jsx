import React, { useState } from 'react'
import HealthCard from '../card/HealthCard';
import { healthyInfo } from '../data/data';
import '../assets/css/card.css';
import TopNav from '../layout/TopNav';
import LoggedTop from '../layout/LoggedTop';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight  } from "react-icons/md";
import Footer from '../layout/Footer';
import { useAuthValue } from '../context/AuthProvider';


const HealthInfo = () => {
const {isLogged} = useAuthValue();
  return (
    <>
    {isLogged? (<LoggedTop />):(<TopNav/>)}
        <div className="container healthinfo-page">
          <hr></hr>
                <h2 className='pb-5'>건강정보</h2>                 
                <div className='row d-flex pt-5'>

                    { healthyInfo.map((item) => {
                        return(
                            <div className='col-3 pb-5'><HealthCard key={item.id} img={item.img} id={item.id} title={item.title} content={item.content} date={item.date} /></div>
                        )
                    })}
                </div>
                <div className="paging">
                  <a href="#" className='first'><MdKeyboardDoubleArrowLeft size={18} /></a>
                  <a href="#" className='in'><MdKeyboardArrowLeft size={18} /></a>
                  <span className='num active'>1</span>
                  <span className='num'>2</span>
                  <span className='num'>3</span>
                  <span className='num'>4</span>
                  <a href="#" className='in'><MdOutlineKeyboardArrowRight size={18} /></a>
                  <a href="#" className='last'><MdKeyboardDoubleArrowRight size={18} /></a>
                </div>
                
    </div>
    <Footer/>
    </>
  )
}

export default HealthInfo