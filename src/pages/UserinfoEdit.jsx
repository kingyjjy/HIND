import React, { useEffect, useState } from 'react'
import {useDaumPostcodePopup} from 'react-daum-postcode';
import { Link, useNavigate } from 'react-router-dom'
import {collection, getDocs, query, addDoc ,setDoc, where, doc, updateDoc, Firestore } from 'firebase/firestore'
import { db,auth, storage } from '../config/firebase';
import { useAuthValue } from '../context/AuthProvider';
import '../assets/css/userinfo.css'
import usericon from '../assets/images/usericon.png'
import LoggedTop from '../layout/LoggedTop'
import Footer from '../layout/Footer'
import { v4 } from 'uuid';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';


const UserinfoEdit = () => {
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
    const navigation = useNavigate();

    const user = auth.currentUser;
    const uid = user.uid;

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
        setNewZonecode(users.zonecode);
        setNewaddress(users.address);
        setNewDetailAdd(users.detailaddress);
    },[]);

    const fetchUser = async()=>{
        try{
            // const email = user.email;
            const q = query(
                  collection(db, "users"), where('uid', '==', uid)
                );
            const querySnapshot = await getDocs(q);
            setUsers(querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
            const get = await getDocs(collection(db, "users"))
            console.log(get);
        }catch(err){
            console.error(err);
        }
    }

    const updateUser = async(id)=>{
        const userDoc = doc(db, 'users', id);
        const newFie = {birth, tel};
        await updateDoc(userDoc, newFie);
    }
    
    
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
            // if(photoURL !== null){
            //     await updateProfile(user, {photoURL:photoURL})
            //     .then(await updateDoc(doc(db, "users", uid),{
            //         zonecode:newZonecode,
            //         address:newaddress,
            //         detailaddress:newdetailAdd,
            //         birth:birth,
            //         tel:tel
            //     }))
            
            // alert('회원정보 수정 완료');
            // navigation('/info');
            // }
            // await updateDoc(doc(db, 'users', id),{
            //     zonecode:newZonecode,
            //     address:newaddress,
            //     detailaddress:newdetailAdd,
            //     birth,
            //     tel
            // })
            
            alert('회원정보 수정 완료');
            navigation('/info');
            
        }catch(err){
            console.error('error update profile ', err);
        }

    }

    const showUser = users.map((user,index)=>(
        
        
        <div className='container' key={index}>
            <div  className="border-top">

                    <div  className="userinfo mx-5">     
                        <div className="m-5 p-5 mx-auto border shadow-lg rounded">
                            <h2 className="text-center mb-5 border-bottom pb-4">내 정보 수정</h2>
                            <div className="iconbox text-start mb-4 pb-4 mx-1" style={{borderBottom:'1px solid #efefef'}}>
                                <div className=''>
                                    <label className='col-3 mt-4 d-block'>사용자 이미지 : </label>
                                    <div className="rounded-circle mx-auto logo" style={{ width:'100px', height:'100px', overflow:'hidden', backgroundImage:`url(${usericon})`}}>
                                        {fileName && <img src={userIcon} alt={fileName}/>}
                                    </div>
                                </div>
                                <div className='filebox'>
                                    <input type="file" hidden id='usericon' onInput={imgChange}/>
                                    <label htmlFor="usericon" style={{ color:'#fff',padding:'15px 20px',lineHeight:'0px' , cursor:'pointer', marginRight:'10px', backgroundColor:'#5A96E3'}}>이미지 선택</label>
                                    {fileName}
                                </div>
                            </div>
                            <div  className="text-start mb-4">
                                <label className='col-2'>이름 : </label>
                                <input type="text" name="username" className='w-50' readOnly value={userinfo?.displayName}/>
                                <div className="text-danger" style={{marginLeft:'11.5rem'}}>*이름 수정 불가*</div>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>이메일 : </label>
                                <input type="text" className='w-50' name="username" readOnly value={userinfo?.email}/>
                                <div className="text-danger" style={{marginLeft:'11.5rem'}}>*이메일 수정 불가*</div>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>주소 : </label>
                                <input type="text" name="username" className='w-25 mb-2' value={user.zonecode} onChange={(e)=>setNewZonecode(e.target.value)} placeholder='우편번호'/>
                                <button type="button" className="ms-1 mb-2 btn btn-secondary" onClick={onClickHandler}>주소찾기</button>
                                <input type="text" name="username" value={user.address} onChange={(e)=>setNewaddress(e.target.value)} style={{marginLeft:'11.5rem', marginBottom:'0.5rem'}} placeholder='주소'/>
                                <input type="text" name="username" value={user.detailaddress} onChange={(e)=>setNewDetailAdd(e.target.value)} style={{marginLeft:'11.5rem'}} placeholder='상세주소'/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>생년월일 : </label>
                                <input type="date" name="username" className='w-25' value={birth} onChange={(e)=>setBirth(e.target.value)}/>
                            </div>
                            <div className="text-start mb-4">
                                <label className='col-2'>전화번호 : </label>
                                <input type="text" name='tel' placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" value={tel} onChange={(e)=>setTel(e.target.value)}/>
                            </div>
                            <div className='text-center mt-5'>
                                <Link to='/info' className='btn btn-lg btn-outline-secondary me-2'>수 정 취 소</Link>
                                <button className='btn btn-lg btn-secondary text-white' onClick={()=>{updateUser(user.id); alert('회원정보 수정완료'); navigation('/info')}}>정 보 수 정</button>
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

export default UserinfoEdit