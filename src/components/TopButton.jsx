import React, {useState, useEffect} from 'react'
import '../assets/css/topbutton.css';
import { IoIosArrowUp } from "react-icons/io";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
        top:0,
        behavior:'smooth',
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
        window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
        window.removeEventListener('scroll', handleShowButton);
    };
  }, []);
  return (
    showButton && (
    <div className='scroll'>
        <button id='top' type='button' onClick={scrollToTop}><IoIosArrowUp size={20} className='mt-1'/><p>Top</p></button>    
    </div>
    )
  )
}

export default TopButton