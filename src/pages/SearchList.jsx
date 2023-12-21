import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useLocation }from 'react-router-dom'
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/searchlist.css';


const SearchList = ({burl}) => {

  const location = useLocation();
    // console.log(location););

  const [data, setData] = useState([]);
  const [item, setItem] = useState('');

  const getSearch = async() => {
    try{
        const response = await axios.get(burl);
        const test =response.data.SynthesizeHospital[1].row;            
        
        // 편의점 제외한 전체 데이터
        const result = test.filter(elem => elem.TREAT_SBJECT_CONT !== null);
        console.log(result);  

        // 내과
        const inData = result.filter((elem)=>{
          return (elem.BIZPLC_NM.includes("내과"));
      })

        setData(inData);
    }catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    getSearch();
}, []);

  return (
    <>
        <TopNav/>
        <div className='container'>
            <div className="search-world position-relative mt-5 d-flex">
              <input type="search" placeholder='검색어를 입력하세요.' className='col-8 searchbox form-control'/>
              <button type="submit" className=" btn col-2 m-1">
                <BsSearch size={23} className='sicon position-absolute'/>
              </button>
            </div>
            <div className="obj-list mt-5 mb-5">
            <div className='list-header'><a href="#">병원명</a><span>주소</span></div>
            {data.map((blogData, idx)=>{
                            return <div className='lists' key={idx}>
                              <Link to="/detail" state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR, lat : blogData.REFINE_WGS84_LAT, logt : blogData.REFINE_WGS84_LOGT}}>{blogData.BIZPLC_NM}</Link>
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