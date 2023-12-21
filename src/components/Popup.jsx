import React, { useEffect, useState } from 'react'
import styles from '../assets/css/popup.module.css';
import { useCookies } from 'react-cookie';
import { RiCloseLine } from "react-icons/ri";
import { RiErrorWarningLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { GoPin } from "react-icons/go";
import { FaMapPin } from "react-icons/fa";

const Popup = () => {
  const [open, setOpen] = useState(true); // 쿠키 팝업
  const [popgit, setPopgit] = useState(true);
  const [testpop, setTestpop] = useState(true);
  const [checked, setChecked] = useState(false);
  const [hasCookie, setHasCookie] = useState(true);
  const [cookies, setCookies] = useCookies();
  
  // 닫기 버튼 click 시
  const handleClose = () => {
    setOpen(false);
  };

  const handleClosegit = () => {
    setPopgit(false);
  };

  const handleClosetest = () => {
    setTestpop(false);
  }

  // 체크박스 클릭시
  const handleChange = (e) => {
    const changed = e.target.checked;
    changed ? setChecked(true) : setChecked(false);
  };

  // 쿠키 유효기간
  const getExpiredDate = (days : number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    // 현재시간 + days 
    return date;
  };

  // 페이지 열었을때 쿠키 유무 확인
  useEffect(() => {
    if(cookies["smile_cookie"]){
      setHasCookie(true);
    }else setHasCookie(false);
  }, []);

  // 닫기 버튼을 누를 때마다 실행될 코드.
  useEffect(() => {
    // 체크되지 않은 상태에서 모달을 닫을 경우
    if (!checked && !open) {
      return;
    }
    // 체크된 상태에서 모달을 닫을 경우
    if (checked && !open) {
      //쿠키를 저장하는 핵심 코드
      const expires = getExpiredDate(1);
      setCookies("smile_cookie", true, { path: "/", expires });
    }
  }, [open]);

  useEffect(()=>{
    if(!popgit){
      return;
    }
  }, [popgit]);

  useEffect(()=> {
    if(!testpop){
      return;
    }
  }, [testpop]);

  return (
    <>
    <div>
      { !hasCookie ? (
        <div
        className={`${styles.popup_background} ${
          open ? "" : styles.disappeared
        }`}
        >
          <div className={styles.popup}>
            <RiCloseLine className={styles.closeBtn} onClick={handleClose} />
            <p className={styles.greeting}>
              <RiErrorWarningLine size={90} className={styles.warning}/>
            </p>
            <p className={styles.text}>
              해당 사이트는 포트폴리오용으로<br></br>
              회원가입 시 실제 정보를 입력할 경우<br></br>개인정보 노출 위험이 있으니 주의 바랍니다.
            </p>
            <div className={styles.input_container}>
              <input type="checkbox" id='checkbox' className={styles.checkbox} onChange={handleChange} />
              <label htmlFor="checkbox" className={styles.label}>
                오늘 하루동안 보지 않기
              </label>
            </div>
          </div>
          </div>
      ) : (
        ""
      )}
      </div>
      <div
        className={`${styles.popup_background} ${
          popgit ? "" : styles.disappeared
        }`}  
        >
        <div className={styles.gitpopup}>
            <div className={styles.gtop}>
              <RiCloseLine className={styles.closeBtn} onClick={handleClosegit} />
              Team member
            </div>
            <div className={styles.profile}>
              <p className={styles.yjjy}>
                김연지<a href='https://github.com/kingyjjy' className={styles.now}>click!</a>
              </p>
              <p className={styles.joung}>
                최민정 <a href='https://github.com/kjh27ss' className={styles.now}>click!</a>
              </p>    
            </div>
                  
        </div>
      </div>
      <div
        className={`${styles.popup_background} ${
          testpop ? "" : styles.disappeared
        }`}>
      <div className={styles.testpopup}>
          <div className={styles.testline}>
            <div className={styles.test}>
              <RiCloseLine className={styles.closeBtn} onClick={handleClosetest} />
              TEST
              <p>아래 정보로 로그인 후 사이트를 이용해보세요!</p>
            </div>
            <div className={styles.sample}>
              <p className='Sid'>아이디 : <span>test@test.com</span></p>
              <p className='Spass'>비밀번호 : <span>123123</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup
