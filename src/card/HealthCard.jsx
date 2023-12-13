import React from 'react'

const HealthCard = (props) => {
  return (
            <div className='card healthy-card max-w-sm relative overflow-hidden'>
                <img className='card-img' src={props.img} alt={props.title}/>
                <div className='card-titlebox'>
                    <p className='card-title px-2 pt-2 mb-3 truncate'>
                        {props.title}
                    </p>
                    {/* <p className='card-text px-2 pb-3'>{props.content}</p> */}
                    <div className='flex justify-between align-middle'>
                        <div className="card-btn mb-2">
                            <a href='#' className='btn mt-2 py-2 px-4'>{props.date}</a>
                        </div>
                    </div>
                </div>                        
            </div>
              )
}

export default HealthCard