import React from 'react'
import { Splide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import "../assets/css/card.css";
import { healthyInfo } from '../data/data';
import { Link } from 'react-router-dom';
import InfoCard from '../card/InfoCard';
import { CiSquarePlus } from "react-icons/ci";

const Info = () => {
  return (
    <>
    <div className="main-info">
        <div className="container info-page">
            <div className='info-header d-flex'>
                <div className='col-11'>
                    <h1 className='text-left'>건강정보</h1>
                    <p className='text-left mb-5'>오늘의 건강정보를 확인해보세요!</p>       
                </div>
                <div className='col-1 plus'>
                    <Link to={"/healthinfo"}><CiSquarePlus size={40}/></Link>
                </div>
            </div>           
        
            <div className="row">          
                <div>
                <Splide
                        options={{
                            perPage: 4,
                            gap : "1rem",
                            grag:"free",
                            arrow:false
                        }}
                    >
                    { healthyInfo.map((item) => {
                        return(
                            <InfoCard key={item.id} img={item.img} id={item.id} title={item.title} content={item.content} date={item.date} />
                        )
                    })}
                    </Splide>
                </div>
            </div>
        </div>
    </div>
    </>
  
  )
}

export default Info