import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
const { kakao } = window;

const MapContainer = () => {
  const location = useLocation();
  const address = location.state.address;

  useEffect(() => {
    const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

    // 지도를 생성합니다    
    const map = new kakao.maps.Map(mapContainer, mapOption); 

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            map.setCenter(coords);
        } 
    });   
 
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "500px" }}></div>
  );
}

export default MapContainer;