import React, {useState} from 'react' 
import { useNavigate } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/main.css'
import searchbar from '../assets/images/searchbar4.jpg'

const Search = () => {
  const [mtext, setMText] = useState(''); // input 입력되는 글자
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMText(e.target.value);
  }

  const handleSearch = () => {
    navigate("/searchapi", {state:{mtext:mtext}});
  }

  const onSubmitSearch = (e) => {
    if(e.key === 'Enter'){
      navigate("/searchapi", {state:{mtext:mtext}});
    }
  }

  return (
    <div className='searchbar pb-5' style={{height:'500px', background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${searchbar}) no-repeat center`, backgroundSize:'7000px'}}>
        <div className="textbox text-center pt-5">
            <h2 className='pt-5'>병원을 검색하세요</h2>
            <p className="pt-3">우리의 기가막힌 홈페이지를 통해 아주 쉽고 빠르게 김포의 병원을 조회하고 예약까지! 진행해보세요</p>
        </div>
        <div className="inputbox position-relative mt-5">
            <input type="text" value={mtext} placeholder='병원검색...' className='searchinput form-control' onChange={handleChange} onKeyPress={onSubmitSearch}/>
            <button type="submit" className=" btn" onClick={handleSearch}><BsSearch className='sicon position-absolute'/></button>
        </div>
    </div>
  )
}

export default Search