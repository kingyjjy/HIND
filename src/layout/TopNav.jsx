import React,{useState} from 'react'
import {GiHearts} from 'react-icons/gi'
import { NavDropdown,Container,Nav, Navbar, Row, Col, Offcanvas } from 'react-bootstrap'
import {GrUser,GrUserManager,GrBook,GrUserSettings} from 'react-icons/gr'
import { Link } from 'react-router-dom'


const TopNav = () => {
    const data = ['월곶', '하성','통진','대곶','양곡','구래','마산','운양','장기','걸포','북변','감정','사우','풍무','고촌'];
    const obj = ['가정의학과','내과', '비뇨기과','산부인과','소아청소년과','신경과','신경외과','안과','외과','이비인후과','재활의학과','정신과','정형외과','치과','피부과','한의원',''];

  return (
    <>  
        <Navbar expand='lg' className="navbar navbar-expand-lg bg-white">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand href='/' className='col-3 link'><img src="images/logo.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navtoggle"/>
                <Navbar.Collapse id="navtoggle">
                    <Nav className='col-9 my-3' style={{flexGrow:'0'}}>
                        <NavDropdown  title='지역찾기' id='basci-nav-dropdown' >
                            <div style={{width:'400px'}}>
                                <Row className='m-3'>
                                    <Col lg='4'>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[11]}}>감정동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[9]}}>걸포동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[14]}}>고촌읍</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[5]}}>구래동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[3]}}>대곶면</Link></NavDropdown.Item>
                                        
                                    </Col>
                                    <Col lg='4'>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[6]}}>마산동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[10]}}>북변동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[12]}}>사우동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[4]}}>양촌읍</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[7]}}>운양동</Link></NavDropdown.Item>
                                        
                                    </Col>
                                    <Col lg='4'>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[0]}}>월곶면</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[8]}}>장기동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[2]}}>통진읍</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[13]}}>풍무동</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/main" state={{name:data[1]}}>하성면</Link></NavDropdown.Item>
                                    </Col>
                                </Row>
                            </div>
                        </NavDropdown>
                        <NavDropdown  title='진료과' id='basci-nav-dropdown' >
                            <div style={{width:'700px'}}>
                                <Row className='m-3'>
                                    <Col lg='3'>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[0]}}>가정의학과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[1]}}>내과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[2]}}>비뇨기과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[3]}}>산부인과</Link></NavDropdown.Item>
                                    </Col>
                                    <Col lg='3'>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[4]}}>성형외과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[5]}}>소아청소년과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[6]}}>신경과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[7]}}>신경외과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[8]}}>안과</Link></NavDropdown.Item>
                                    </Col>
                                    <Col lg='3'>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[9]}}>외과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[10]}}>이비인후과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[11]}}>재활의학과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[12]}}>정신건강의학과</Link></NavDropdown.Item>
                                        
                                    </Col>
                                    <Col lg='3'>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[13]}}>정형외과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[14]}}>치과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[15]}}>피부과</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/objlist" state={{mobj:obj[16]}}>한방과</Link></NavDropdown.Item>
                                    </Col>
                                </Row>
                            </div>
                        </NavDropdown>
                        <Nav.Link href="/healthinfo">건강정보</Nav.Link>
                        {/* <Nav.Link href="#">서비스안내</Nav.Link> */}
                        <NavDropdown  title='서비스안내' id='basci-nav-dropdown' >
                            <div style={{width:'100px'}}>
                                <Row className='m-3'>
                                    <Col>
                                        <NavDropdown.Item>FAQ</NavDropdown.Item>
                                        <NavDropdown.Item>공지사항</NavDropdown.Item>
                                    </Col>
                                </Row>
                            </div>
                        </NavDropdown>
                        
                    </Nav>
                
                    <div className='col-6 d-flex authbox'>
                        <Link to="/login" className='link btn btn-outline-dark'>로그인</Link>  
                        <Link to="/register" className='link btn btn-outline-dark mx-2'>회원가입</Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default TopNav