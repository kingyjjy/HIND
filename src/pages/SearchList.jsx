import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useLocation }from 'react-router-dom'
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/searchlist.css';

const SearchList = ({burl}) => {
  const [data,setData] = useState([]); // api data 담기
  const [text, setText] = useState(''); // input 입력되는 글자
  const [filters, setFilters] = useState(data); // 필터된 data

  // main
  const location = useLocation();
  const area = location.state.area;
  const item = location.state.mtext;

  const getSearch = async() => {
    try{
          const res = await axios.get(burl);
          const test = res.data.data; 

          // 지역
          const aname = test.filter((elem)=>{
            return (elem.소재지주소.includes(area));
          })

          const maintext = aname.filter((elem) => {
              return elem.상호명.includes(item.toLowerCase());
            })

          setData(aname);
          setFilters(maintext);

    }catch(e){
      console.log(e);
    }
  }
  useEffect(() => {
    getSearch();
  }, [area])

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => { // 클릭 검색시
    if(text == ''){
      alert("검색어를 입력해주세요.");
    }
    else{
      setFilters(data.filter(elem => elem.상호명.includes(text.toLowerCase())));
    }
  }

  const onSubmitSearch = (e) => {
    if(e.key === 'Enter'){
      if(text == ''){
        alert("검색어를 입력해주세요.");
      }
      else{
        setFilters(data.filter(elem => elem.상호명.includes(text.toLowerCase())));
      }
    }
  }

  return (
    <>
        <TopNav/>
        <div className='container d-flex flex-column min-vh-100'>
            <div className="search-world position-relative mt-5 d-flex">
              <input type="text" value={text} placeholder='검색어를 입력하세요.' className='col-8 searchbox form-control' onChange={handleChange} onKeyPress={onSubmitSearch}/>
              <button type="submit" className=" btn col-2 m-1" onClick={handleClick}>
                <BsSearch size={23} className='sicon position-absolute'/>
              </button>
            </div>
            <div className="obj-list mt-5 mb-5">
              <div className='list-header'><a href="#">병원명</a><span>주소</span></div>
              {
                filters.map(elem => <div className='lists' key={elem.상호명}>
                   <Link to="/detail" state={{ title : elem.상호명, address : elem.소재지주소, tel : elem.전화번호}}>{elem.상호명}</Link>
                                     <span>{elem.소재지주소}</span>
                </div>)
              }
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SearchList