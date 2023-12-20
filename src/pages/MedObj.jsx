import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer';
import '../assets/css/medobj.css';

const MedObj = ({burl}) => {
  const location = useLocation();
  const objname = location.state.mobj;
  const [list,setList] = useState([]);

  const getList = async() => {
    try{
        const response = await axios.get(burl);
        const test =response.data.SynthesizeHospital[1].row;            
        
        // 편의점 제외한 전체 데이터
        const result = test.filter(elem => elem.TREAT_SBJECT_CONT !== null);
        console.log(result);      
        
        // 진료과
        const meobj = result.filter((elem)=>{
          return (elem.BIZPLC_NM.includes(objname));
      })
      console.log(meobj);

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

export default MedObj