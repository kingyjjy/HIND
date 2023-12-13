import React, { useEffect, useState } from 'react'
import {useDaumPostcodePopup} from 'react-daum-postcode';
import { Link } from 'react-router-dom'
import {collection, getDocs, query, addDoc ,where, doc, updateDoc } from 'firebase/firestore'
import { db,auth, storage } from '../config/firebase';
import { useAuthValue } from '../context/AuthProvider';
import '../assets/css/userinfo.css'
import usericon from '../assets/images/usericon.png'
import LoggedTop from '../layout/LoggedTop'
import Footer from '../layout/Footer'
import { v4 } from 'uuid';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';


const UserInfo = () => {
    const {userinfo} = useAuthValue();
    const [users, setUsers] = useState([]);
    const [newZonecode, setNewZonecode] = useState();
    const [newaddress, setNewaddress] = useState();
    const [newdetailAdd, setNewDetailAdd] = useState();
    const [birth, setBirth] = useState();
    const [tel, setTel] = useState();
    const [userImg, setUserImg] = useState();
    const [userIcon, setUserIcon] = useState();
    const [fileName, setFileName] = useState();

    const CURRENT_URL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(CURRENT_URL);
    const onClickHandler = ()=>{
        open({onComplete:handleComplete});
      }
      // 주소 받기
      const handleComplete =(data)=>{
        let fullAddress = data.address;
            let extraAddress = '';
        let zoneCodes = data.zonecode;
        setNewZonecode(data.zonecode)
        setNewaddress(data.address)
    
            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress +=
                        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }
        console.log(zoneCodes);
        console.log(fullAddress);
      };

    //이미지 미리보기
    const encodeFileToBase64 = (fileB) =>{
        const reader = new FileReader();
        reader.readAsDataURL(fileB);
        return new Promise((res)=>{
            reader.onload=()=>{
                setUserIcon(reader.result);
                res();
            }
        })
    }
    //파일 확장자 추출함수
    const extExt = (filename)=>{
        const lastdot = filename.lastIndexOf(".");
        return filename.subString(lastdot, filename.length).toLowerCase();
    }
    const imgChange=(e)=>{
        const newIcon = e.target.files[0];
        encodeFileToBase64(newIcon);
        setUserIcon(newIcon);
        setFileName(newIcon.name);
        setUserImg(e.target.files[0]);
        console.log(extExt(fileName));
    }

    useEffect(()=>{
        fetchUser();
    },[]);
    const fetchUser = async()=>{
        try{
            const user = auth.currentUser;
            const uid = user.uid;
            const email = user.email;
            const q = query(
                  collection(db, 'users'), where('email', '==', email)
                );
                const querySnapshot = await getDocs(q);
                setUsers(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }catch(err){
            console.error(err);
        }
    }

    const user = auth.currentUser;
    const handleClick =async(e)=>{
        e.preventDefault();
        let photoURL ='';
        if(fileName !== null){
            try{
                const fileExt = extExt(fileName);
                const imgRef = ref(storage, `userdata/${v4()}${fileExt}`);
                await uploadBytes(imgRef, userImg);
                photoURL = await getDownloadURL(imgRef);
            }catch(err){
                console.error('error image upload', err);
            }
        }
        try{
            await updateProfile(user,{photoURL})
            .then(await updateDoc(collection(db, 'users'),{
                zonecode:newZonecode,
                address:newaddress,
                detailaddress:newdetailAdd,
                birth:birth,
                tel:tel
            }))
        }catch(err){
            console.error('error update profile ', err);
        }

    }

    const showUser = users.map((user,index)=>(
        
        
        <div className='container'>
            <div  className="border-top">

                    <div key={index} className="userinfo mx-5">     
                        <div className="m-5 p-5 mx-auto border shadow-lg rounded">
                            <h2 className="text-center mb-5 border-bottom pb-4">내 정보</h2>
                            <div className="iconbox text-start mb-4 pb-4 mx-1" style={{borderBottom:'1px solid #efefef'}}>
                                <div className=''>
                                    <label className='col-3 mt-4 d-block'>사용자 이미지 : </label>
                                    <div className="rounded-circle mx-auto logo" style={{ width:'100px', height:'100px', overflow:'hidden', backgroundImage:`url(${usericon})`}}>
                                        {fileName && <img src={userIcon} alt={fileName}/>}
                                    </div>
                                </div>
                                <div className='filebox'>
                                    <input type="file" hidden id='usericon' onInput={imgChange}/>
                                    <label htmlFor="usericon" style={{ color:'#fff',padding:'15px 20px',lineHeight:'0px' , cursor:'pointer', backgroundColor:'#5A96E3'}}>이미지 선택</label>
                                    {fileName}
                                </div>
                            </div>
                            <div  className="text-start mb-4">
                                <label className='col-2'>이름 : </label>
                                <input type="text" name="username" className='w-50' readOnly value={user.displayName}/>
                                <div className="text-danger" style={{marginLeft:'11rem'}}>*이름 수정 불가*</div>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>이메일 : </label>
                                <input type="text" className='w-50' name="username" readOnly value={userinfo?.email}/>
                                <div className="text-danger" style={{marginLeft:'8rem'}}>*이메일 수정 불가*</div>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>주소 : </label>
                                <input type="text" name="username" className='w-25 mb-2' value={newZonecode} onChange={(e)=>setNewZonecode(e.target.value)}/>
                                <button type="button" className="ms-1 mb-2 btn btn-secondary" onClick={onClickHandler}>주소찾기</button>
                                <input type="text" name="username" value={newaddress} onChange={(e)=>setNewaddress(e.target.value)} style={{marginLeft:'7.7rem', marginBottom:'0.5rem'}}/>
                                <input type="text" name="username" value={newdetailAdd} onChange={(e)=>setNewDetailAdd(e.target.value)} style={{marginLeft:'7.7rem'}}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>생년월일 : </label>
                                <input type="date" name="username" className='w-25' value={birth} onChange={(e)=>setBirth(e.target.value)}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>전화번호 : </label>
                                <input type="text" name="username" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                            </div>
                            <div className='text-center mt-5'>
                                <Link to="/userinfo-edit" className='btn btn-lg btn-secondary text-white'>정 보 수 정</Link>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        
    
    ))
  return (
    <>
    <LoggedTop/>
    {showUser}
    <Footer/>
    </>
  )
}

export default UserInfo