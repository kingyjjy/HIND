import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link }from 'react-router-dom'
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/searchlist.css';

// const user = [
//   { id:1 , name: '이나영'},
//   { id:2 , name: '김태희'},
//   { id:3 , name: '다음'},
//   { id:4 , name: '네이버'},
//   { id:5 , name: 'daum'},
//   { id:6 , name: 'Naver'},
//   { id:7 , name: 'GOOGLE'},
//   { id:8 , name: '김다미'},
//   { id:9 , name: '다람쥐'},
//   { id:10 , name: 'TIGER'},
//   { id:11 , name: '홍대'},
//   { id:12 , name: '강남'},
//   { id:13 , name: '영등포'},
// ]

const SearchList = ({burl}) => {
  const [data,setData] = useState([]); // api data 담기
  const [text, setText] = useState(''); // input 입력되는 글자
  const [filters, setFilters] = useState(data); // 필터링 글자

  console.log(data);

  useEffect(()=> {
    const getSearch = async() => {
      try{
          const res = await axios.get(burl);
          const test = res.data.SynthesizeHospital[1].row;
  
          setData(test);
          console.log(data);
      }catch(e){
          console.log(e);
      }
    }
  })
  

  // useEffect(() => {
  //   setFilters(data.filter(item => item.TREAT_SBJECT_CONT.includes(text.toLowerCase())))
  // }, [text])


  return (
    <>
        <TopNav/>
        <div className='container'>
            <div className="search-world position-relative mt-5 d-flex">
              <input type="text" value={text} placeholder='검색어를 입력하세요.' className='col-8 searchbox form-control' onChange={e => setText(e.target.value)}/>
              <button type="submit" className=" btn col-2 m-1" >
                <BsSearch size={23} className='sicon position-absolute'/>
              </button>
            </div>
            <div className="obj-list mt-5 mb-5">
            <div className='list-header'><a href="#">병원명</a><span>주소</span></div>
            {/* {data.map((item, idx)=>{
                            return <div className='lists' key={idx}>
                              <Link to="/detail" state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR, lat : blogData.REFINE_WGS84_LAT, logt : blogData.REFINE_WGS84_LOGT}}>{blogData.BIZPLC_NM}</Link>
                                  <span>{blogData.REFINE_LOTNO_ADDR}</span>
                              </div>;
                        })}  */}
            {
              filters.map(item => <div className='lists' key={item.TREAT_SBJECT_CONT}>
                {item.TREAT_SBJECT_CONT }
              </div>)
            }
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default SearchList