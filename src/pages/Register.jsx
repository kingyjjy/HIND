import React,{useState} from 'react'
import {useDaumPostcodePopup} from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { collection, addDoc ,serverTimestamp } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import TopNav from '../layout/TopNav';
import Footer from '../layout/Footer';

const Register = () => {
  const CURRENT_URL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [cperr, setCperr] =useState('');
  const [chkpass, setChkpass] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const navigate = useNavigate();

  const user = auth.currentUser;

  //이메일, 비밀번호 검증
  const emailReg = async(e)=>{
    setEmail(e.target.value);
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!reg.test(e.target.value)){
      setRegEmail('이메일 형식: ex) example@exam.com');
    }else{
      setRegEmail('');

    }
  }
  const passReg = (e)=>{
    setPass(e.target.value);
    if(e.target.value.length<6){
      setChkpass('비밀번호는 6자 이상입니다.');
    }else{
      setChkpass('');
    }
  }
  const handleConfirmPass =(e)=>{
    setConfirmPass(e.target.value);
    if(e.target.value !== pass){
      setCperr('비밀번호 불일치');
    }else{
      setCperr('');
    }
  }

  // const onClickHandler = ()=>{
  //   open({onComplete:handleComplete});
  // }
  // // 주소 받기
  // const handleComplete =(data)=>{
  //   let fullAddress = data.address;
	// 	let extraAddress = '';
  //   let zoneCodes = data.zonecode;
  //   setZonecode(data.zonecode)
  //   setAddress(data.address)

	// 	if (data.addressType === 'R') {
	// 		if (data.bname !== '') {
	// 			extraAddress += data.bname;
	// 		}
	// 		if (data.buildingName !== '') {
	// 			extraAddress +=
	// 				extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
	// 		}
	// 		fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
	// 	}
  //   console.log(zoneCodes);
  //   console.log(fullAddress);
  // };

const handleSubmit = async(e)=>{
    e.preventDefault();
    const require = {
      name,
      email,
      pass
    }
    //필수입력
    let hasEmpty = false;
    for(let i in require){ 
      if(!require[i]){
        hasEmpty=true;
      }
    }
    if(hasEmpty){
      alert('별 표시부분은 필수 입력칸 입니다.');
    }else{
      try{
        await createUserWithEmailAndPassword(auth, email, pass) //가입         
          .then( await addDoc(collection(db, 'users'), { //유저정보 저장
            timestamp:serverTimestamp(),
            email:email,
            name:name,
            uid:user.uid
          }))
          .then( await updateProfile(user,{displayName:name}));
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      }catch(err){
        console.error('register error',err);
      }
      
    }
  }
  

  return (
    <>
      <TopNav/>
      <form>
        <div className="container">
          <hr /> 
          <div className="regibox border shadow-lg rounded mx-auto mb-3 px-5" style={{width:'70%'}}>
            <h2 className="text-center mt-5">회원가입</h2>
              <div className='p-5'>
                <div className='my-4'>
                  <label htmlFor="name" className='mb-2'>이름 <span className="text-danger">*</span></label>
                  <input type="text" name="name" className="form-control w-50" value={name} onChange={(e)=>setName(e.target.value)} placeholder='이름'/>
                </div>
                <div className='my-4'>
                  <label htmlFor="email" className='mb-2'>이메일 <span className="text-danger">*</span></label>
                  <div className="input-group w-50">
                    <input type="text" name="email" className="form-control" value={email} onChange={emailReg} placeholder='이메일'/>
                  </div>
                  {
                      regEmail !== '' ? (<div className='text-danger'>{regEmail}</div>):null
                    }                 
                </div>
                <div className='my-4'>
                  <label htmlFor="password" className='mb-2'>비밀번호 <span className="text-danger">*</span></label>
                  <input type="password" name="pass" className="form-control" value={pass} onChange={passReg} placeholder='비밀번호'/>
                  {
                    chkpass !== '' ? (<div className='text-danger'>{chkpass}</div>):null  
                  }
                </div>
                <div className='my-4'>
                  <label htmlFor="passwordchk" className='mb-2'>비밀번호 확인</label>
                  <input type="password" name="confirmpass" className="form-control" value={confirmPass} onChange={handleConfirmPass} placeholder='비밀번호 확인'/>
                  {
                    cperr !== '' ? (<div className='text-danger'>{cperr}</div>):null  
                  }
                </div>
                {/* <div className="my-4">
                  <label htmlFor="address" className="mb-2">주소</label>
                  <div className="mb-2 input-group w-50">
                    <input type="text" className="form-control" name='zoneCode'  placeholder='우편번호' value={zonecode} onChange={(e)=>setZonecode(e.target.value)}/>
                    <div className='input-group-append'><button type="button" className="btn btn-secondary" onClick={onClickHandler}>주소찾기</button></div>
                  </div>
                  <input type="text" id='address' name='address' className="mb-1 form-control" placeholder='주소' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                  <input type="text" id='detailaddress' name='detailAddress' className="form-control"  placeholder='세부주소' value={detailaddress} onChange={(e)=>setDetailaddress(e.target.value)}/>
                </div> */}
                <div className="d-flex justify-content-center">
                  <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-secondary mt-5 mb-4">회원가입</button>
                </div>
              </div>
          </div>
        </div>
      </form>
      <Footer/>
    </>
  )
}

export default Register