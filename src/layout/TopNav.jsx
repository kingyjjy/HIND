import React,{useState} from 'react'
import {GiHearts} from 'react-icons/gi'
import { NavDropdown,Container,Nav, Navbar, Row, Col, Offcanvas } from 'react-bootstrap'
import {GrUser,GrUserManager,GrBook,GrUserSettings} from 'react-icons/gr'
import { Link } from 'react-router-dom'


const TopNav = () => {
    const [show, setShow] = useState(false);

    const handleClose = ()=>setShow(false);
    const handelShow = ()=>setShow(true);
  return (
    <>  
        <Nav className="navbar navbar-expand-lg bg-white">
            <Container className='d-flex justify-content-between'>
                <Link to='/' className=' link'><img src="images/logo.png" alt="" /></Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'/>
                <Nav className='my-3' style={{flexGrow:'0'}}>
                    <NavDropdown  title='지역찾기' id='basci-nav-dropdown' >
                        <div style={{width:'400px'}}>
                            <Row className='m-3'>
                                <Col lg='4'>
                                    <NavDropdown.Item href='#'>감정동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>걸포동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>고촌읍</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>구래동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>대곶면</NavDropdown.Item>
                                    
                                </Col>
                                <Col lg='4'>
                                    <NavDropdown.Item href='#'>마산동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>북변동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>사우동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>양촌읍</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>운양동</NavDropdown.Item>
                                    
                                </Col>
                                <Col lg='4'>
                                    <NavDropdown.Item href='#'>월곶면</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>장기동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>통진읍</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>풍무동</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>하성면</NavDropdown.Item>
                                </Col>
                            </Row>
                        </div>
                    </NavDropdown>
                    <NavDropdown  title='진료과' id='basci-nav-dropdown' >
                        <div style={{width:'700px'}}>
                            <Row className='m-3'>
                                <Col lg='3'>
                                    <NavDropdown.Item href='#'>가정의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>내과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>마취통증의학</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>방사선종양학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>병리과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>비뇨의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>산부인과</NavDropdown.Item>
                                </Col>
                                <Col lg='3'>
                                    <NavDropdown.Item href='#'>산업의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>성형외과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>소아청소년과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>신경과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>신경외과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>안과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>예방의학과</NavDropdown.Item>
                                </Col>
                                <Col lg='3'>
                                    <NavDropdown.Item href='#'>외과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>응급의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>이비인후과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>재활의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>정신건강의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>정형외과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>직업환경의학과</NavDropdown.Item>
                                </Col>
                                <Col lg='3'>
                                    <NavDropdown.Item href='#'>진단검사의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>치과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>피부과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>한방과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>핵의학과</NavDropdown.Item>
                                    <NavDropdown.Item href='#'>흉부외과</NavDropdown.Item>
                                </Col>
                            </Row>
                        </div>
                    </NavDropdown>
                    <Nav.Link href="#">건강정보</Nav.Link>
                    <Nav.Link href="#">서비스안내</Nav.Link>
                    
                </Nav>
                <div className='d-flex'>
                {/* <button type='button' className='btn me-2' onClick={handelShow}><GrUser/></button> */}
                    <Link to="/login" className='link btn btn-outline-dark'>로그인</Link>  
                    <Link to="/register" className='link btn btn-outline-dark mx-2'>회원가입</Link>
                </div>
                {/* </div>   */}
            </Container>
        </Nav>
        {/* sidebar notlogin*/}
        {/* <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>MyPage</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="infobox border-bottom  bg-white ms-2 pb-3">
                    <div className="rounded-circle border mt-4 mx-auto text-center" style={{width:'70px', height:'70px', lineHeight:'60px'}}>
                        <GrUserManager size={40}/>
                    </div>
                    <div className="info-textbox ms-4 my-3 pe-2 text-start" id='myinfo-media'>
                        <h5 className='fw-bold text-center'>Username</h5>
                        <h6 className='text-center'>useremail@example.com</h6>
                    </div> 
                </div>
                <Link to="/info" className="list-group-item list-group-item-action list-group-item-light p-3"><GrUserSettings className='me-2'/> 내 정보</Link>
                <Link to="/bookmark" className="list-group-item list-group-item-action list-group-item-light p-3"><GiHearts className='me-2'/> 즐겨찾기</Link>
                <Link to="/reserv-list" className="list-group-item list-group-item-action list-group-item-light p-3"><GrBook className='me-2'/> 예약내역</Link>
                <p className='pt-2 text-end'><Link to="#"  className='link-dark'>logout</Link></p>
            </Offcanvas.Body>
        </Offcanvas> */}
        
        {/* /sidebar */}
    </>
  )
}

export default TopNav