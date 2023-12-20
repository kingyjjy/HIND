import React,{useState, useEffect} from 'react'
import axios from 'axios'
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/searchlist.css';

const SearchList = ({burl}) => {

  const [data, setData] = useState();
  const [userInput, setUserInput] = useState('');

  const getValue = (e) => {
    setUserInput(e);
  }
  
  const getSearch = async() => {
    try{
      const response = await axios.get(burl);
        const test =response.data.SynthesizeHospital[1].row;            
        
        // 편의점 제외한 전체 데이터
        // const result = test.filter(elem => elem.TREAT_SBJECT_CONT !== null);
        // console.log(result);

        // setData(result);
    }catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    getSearch();
}, [data]);

  return (
    <>
        <TopNav/>
        <div className='container'>
            <div className="search-world position-relative mt-5">
              <input type="search" placeholder='검색어를 입력하세요.' className='searchbox form-control'/>
              <button type="submit" className=" btn"><BsSearch className='sicon position-absolute' onChange={(e)=> getValue(e.target.value)} /></button>
            </div>
            <div className="search-result mt-5 mb-5">
            {data.map((blogData, idx)=>{
                            return <div className='lists' key={idx}><a href="#">{blogData.BIZPLC_NM}</a>
                                  <span>{blogData.REFINE_LOTNO_ADDR}</span>
                              </div>;
                        })} 
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SearchList