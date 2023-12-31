import React,{useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {SiGithub, SiFacebook} from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../config/firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const onSubmit = async (e)=>{
    e.preventDefault();
    if(!email){
      alert('이메일 입력필수');
    }else if(!pass){
      alert('비밀번호 입력필수');
    }else{
      try{
        const res = await signInWithEmailAndPassword(auth, email, pass);
        const users = res.user;
        if(!users){
          alert('아이디 또는 비밀번호 오류');
          return;
        }else{
          const user = auth.currentUser;
          navigate('/');
        }
      }catch(err){
        console.error('login error',err);
      }
    }
  };

  // googlesign
  const handleGooglesign = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(async()=> {
      
      setName(()=>user.displayName)
      setProfile(()=>user.photoURL)
      setEmail(()=>user.email)
      await addDoc(collection(db, 'users'),{
        name:user.displayName,
        email:user.email,
        uid:user.uid
      })
      navigate('/')
    })
    .catch((err)=>alert(err.message))

  }
  // facebooksign
  const handleFacebooksign = () =>{
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
    .then(async()=>{
      setName(()=>user.displayName)
      setProfile(()=>user.photoURL)
      setEmail(()=>user.email)
      await addDoc(collection(db, 'users'),{
        name:user.displayName,
        email:user.email,
        uid:user.uid
      })
      navigate('/')
    })
    .catch((err)=>alert(err.message))
  }
  //githubsign
  const handleGithubsign = () =>{
    const gitProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitProvider)
    .then(async()=>{
      setName(()=>user.displayName)
      setProfile(()=>user.photoURL)
      setEmail(()=>user.email)
      await addDoc(collection(db, 'users'),{
        name:user.displayName,
        email:user.email,
        uid:user.uid
      })
      navigate('/')
    })
    .catch((err)=>alert(err.message))
  };


    

  return (
    <form>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="bg-white my-5 mx-auto border shadow-lg" style={{borderRadius:'1rem', width:'500px'}}>
                <div className="d-flex justify-content-between pt-4 px-5">
                  <Link to='/'><img src="images/logo.png" alt="logo" /></Link>
                  <div className="text-end"><Link to='/' className="btn btn-close"></Link></div>
                </div>
                <div className="p-5 w-100 d-flex flex-column">
                  
                  <h2 className="fw-bold mb-5 text-center">로그인</h2>
                  <div className="mx-5 mb-3">
                    <label htmlFor="id">이메일</label>
                    <input type="text" name="userId" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='이메일'/>
                  </div>
                  <div className="mx-5">
                    <label htmlFor="pass">비밀번호</label>
                    <input type="password" name="userPass" className="form-control" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='비밀번호'/>
                  </div>

                  <Link to="/register" className="text-end mx-5 mt-2" style={{fontSize:'13px'}}>회원가입</Link>
                  <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" className="btn btn-secondary" onClick={onSubmit} style={{backgroundColor:'#3E54AC'}}>로그인</button>
                  </div>
                  <hr />
                  
                  <div className="d-flex justify-content-between mx-5 mt-3">
                    <Link to="#" onClick={handleGooglesign}><FcGoogle size={30}/></Link>
                    <Link to="" onClick={handleGithubsign}><SiGithub size={30} /></Link>
                    <Link to="#" onClick={handleFacebooksign}><SiFacebook size={30} color='darkblue'/></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </form>
  )
}

export default Login