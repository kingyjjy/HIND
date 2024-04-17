import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link , useLocation} from 'react-router-dom';
import { Nav, Tab, Col, Row} from 'react-bootstrap';
import '../assets/css/axiosdata.css';

const AxiosData = ({burl}) => {
    const location = useLocation();
    // console.log(location);
    const area = location.state.name;
    console.log(area);

    const [data,setData] = useState([]);

    // 특정 단어 찾기
    const [inn, setInn] = useState([]);
    const [tooth, setTooth] = useState([]);        
    const [sanbu, setSanbu] = useState([]);
    const [surgery, setSurgery] = useState([]);
    const [pediatrics, setPediatrics] = useState([]);
    const [han, setHan] = useState([]);
    const [skin, setSkin] = useState([]);
    const [eyes, setEyes] = useState([]);

    const getUser = async() => {
        try{
            const res = await axios.get(burl);
            const test = res.data.data;
            console.log(test);  

            // 지역
            const aname = test.filter((elem)=>{
                return (elem.소재지주소.includes(area));
            })

            // 내과
            const inData = aname.filter((elem)=>{
                return (elem.상호명.includes("내과"));
            })

            // 외과
            const surgeryData = aname.filter((elem)=>{
                return (elem.상호명.includes("외과"));
            })    

            // 청소년과
            const pediatricsData = aname.filter((elem)=>{
                return (elem.상호명.includes("청소년"));
            })    


            // 치과
            const toothData = aname.filter((elem)=>{
                return (elem.상호명.includes("치과"));
            })

            // 한의원
            const hanData = aname.filter((elem)=>{
                return (elem.상호명.includes("한의원"));
            })    

            // 산부인과
            const sanbuData = aname.filter((elem)=>{
                return (elem.상호명.includes("산부인과"));
            })

            // 안과
            const eyesData = aname.filter((elem)=>{
                return (elem.상호명.includes("안과"));
            })  

            // 피부과
            const skinData = aname.filter((elem)=>{
                return (elem.상호명.includes("피부"));
            })    

            setInn(inData);
            setSurgery(surgeryData);
            setPediatrics(pediatricsData);
            setData(aname);
            setTooth(toothData);
            setHan(hanData);
            setSanbu(sanbuData);
            setEyes(eyesData);
            setSkin(skinData);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getUser();
    },[area]);


  return (
    <>
        <div className="category container">   
            <div className="area-panel">
                <h1 className='area-name text-center'>{location.state.name}</h1>
            </div>    
            <h2 className='text-left mt-5'>진료과 찾기</h2>
            <p className='text-left mb-5'>진료과 카테고리별 병원 리스트를 확인해보세요!</p>  

            <Tab.Container defaultActiveKey="All">
            <Nav variant='pills' className='category-list d-flex'>
                <Nav.Item>
                    <Nav.Link eventKey="All">전체</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="inn">내과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tooth">치과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sanbu">산부인과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="surgery">외과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pediatrics">청소년과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="han">한의원</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="skin">피부과</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="eyes">안과</Nav.Link>
                </Nav.Item>
            </Nav>
            <Col sm={12}>
                <Tab.Content>
                    <Tab.Pane eventKey="All">
                        <div className="row">
                            {data.map((blogData, idx)=>{
                                return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.상호명, address : blogData.소재지주소}}>{blogData.상호명}</Link></div>;
                            })} 
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="inn">
                        <div className="row">
                            {inn.map((blogData, idx)=>{
                                return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.상호명, address : blogData.소재지주소}}>{blogData.상호명}</Link></div>;
                            })}  
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="tooth">
                        <div className='row'>
                            {tooth.map((blogData, idx)=>{
                                        return <div key={idx} className='col-4 tab-list'><Link to="/detail" 
                                        state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR}}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="sanbu">
                        <div className="row">
                            {sanbu.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR}}>{blogData.상호명}</Link></div>;
                            })}        
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="surgery">
                        <div className="row">
                            {surgery.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR}}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="pediatrics">
                        <div className="row">
                            {pediatrics.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, address : blogData.REFINE_LOTNO_ADDR}}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="han">
                        <div className="row">
                            {han.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, }}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="skin">
                        <div className="row">
                            {skin.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, }}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                    <Tab.Pane eventKey="eyes">
                        <div className="row">
                            {eyes.map((blogData, idx)=>{
                                    return <div key={idx} className='col-4 tab-list'><Link to="/detail" state={{ title : blogData.BIZPLC_NM, }}>{blogData.상호명}</Link></div>;
                            })}
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
            </Tab.Container>
        </div>
            </>
  )
}


export default AxiosData