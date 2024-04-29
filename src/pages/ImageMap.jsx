import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import '../assets/css/imagemap.css';


const ImageMap = () => {
  const data = ['월곶', '하성','통진','대곶','양곡','구래','마산','운양','장기','걸포','북변','감정','사우','풍무','고촌'];
  return (
    <div className='map-container text-center'>
        <h2 className='text-black pb-5'>우리 동네 <span>병원찾기</span></h2>
        <h4 className='location rounded-4 mt-3'><CiLocationOn size={24} />클릭시 해당 지역 페이지로 이동합니다!</h4>
        <div className="top-all">
            <div className="back">
            <img src="images/map/map.png" alt="" width="500px" height="500px"/>
                <Link to="/main" state={{ name : data[0]}}  className='wolgoj'>월곶</Link>
                <Link to="/main" state={{ name : data[1]}} className='hasung'>하성</Link>
                <Link to="/main" state={{ name : data[2]}} className='tongjin'>통진</Link>
                <Link to="/main" state={{ name : data[3]}} className='daegoj'>대곶</Link>
                <Link to="/main" state={{ name : data[4]}} className='yang'>양곡</Link>
                <Link to="/main" state={{ name : data[5]}} className='gulae'>구래</Link>
                <Link to="/main" state={{ name : data[6]}} className='masan'>마산</Link>
                <Link to="/main" state={{ name : data[7]}} className='unyang'>운양</Link>
                <Link to="/main" state={{ name : data[8]}} className='janggi'>장기</Link>
                <Link to="/main" state={{ name : data[9]}} className='geolpo'>걸포</Link>
                <Link to="/main" state={{ name : data[10]}} className='bugbyeon'>북변</Link>
                <Link to="/main" state={{ name : data[11]}} className='gamjeong'>감정</Link>
                <Link to="/main" state={{ name : data[12]}} className='sau'>사우</Link>
                <Link to="/main" state={{ name : data[13]}} className='pungmu'>풍무</Link>
                <Link to="/main" state={{ name : data[14]}} className='gochon'>고촌</Link>
            </div>
          </div>
    </div>
  )
}

export default ImageMap