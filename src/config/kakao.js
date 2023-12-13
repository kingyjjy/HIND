import KakaoLogin from "react-kakao-login";
import dotenv from 'dotenv';
dotenv.config();


const kakao = ()=>{
    const kakaoUserId = process.env.REACT_APP_KAKAO_LOGIN_KEY;
    const kakaoOnSuccess = async(data)=>{
        console.log(data);
        const idToken = data.reaponse.access_token
    }
    const kakaoOnFail =(error)=>{
        console.log(error);
    };
    return(
        <>
            <KakaoLogin token={kakaoUserId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFail}/>
        </>
    )
}

export default kakao