import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer';
import '../assets/css/medobj.css';

const MedObj = ({burl}) => {
  const location = useLocation();
  const objname = location.state.mobj;
  const [list,setList] = useState([]);

  const getList = async() => {
    try{
          const res = await axios.get(burl);
          const test = res.data.data;         
        
          // 진료과
          const meobj = test.filter((elem)=>{
            return (elem.상호명.includes(objname));
      })
        setList(meobj);
    }catch(e){
        console.log(e);
    }
} 
useEffect(()=>{
    getList();
}, [list]);

  return (
    <>
        <TopNav />
        <div className="container obj-title d-flex flex-column min-vh-100">
          <h1 className='text-center'>{objname}<p>진료과목별 전체 리스트입니다.</p></h1>
          <div className="obj-list">
            <div className='list-header'><a href="#">병원명</a><span>주소</span></div>
            {list.map((blogData, idx)=>{
                            return <div className='lists' key={idx}><Link to="/detail" state={{ title : blogData.상호명, address : blogData.소재지주소, tel : blogData.전화번호}}>{blogData.상호명}</Link>
                                  <span>{blogData.소재지주소}</span>
                              </div>;
                        })} 
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default MedObj