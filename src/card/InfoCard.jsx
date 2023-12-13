import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import "../assets/css/card.css"

const InfoCard = (props) => {
            return (
                    <SplideSlide> 
                        <div className='card info-card max-w-sm relative overflow-hidden'>
                            <img className='card-img' src={props.img} alt={props.title}/>
                            <div className='px-6'>
                                <p className='card-title px-2 pt-2 text-xl mb-3 truncate'>
                                    {props.title}
                                </p>
                                <p className='card-text px-2'>{props.content}</p>
                                <div className='flex justify-between align-middle'>
                                    <div className="card-btn mb-2">
                                        <a href='#' className='btn mt-2 py-2 px-4'>{props.date}</a>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </SplideSlide>
  )
}
export default InfoCard