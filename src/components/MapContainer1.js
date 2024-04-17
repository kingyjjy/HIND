import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
const { kakao } = window;


const MapContainer = () => {
  const location = useLocation();
    const lat = Number(location.state.lat);
    const logt = Number(location.state.logt);
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat,logt),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 표시될 위치
    const markerPosition  = new kakao.maps.LatLng(lat,logt); 

    // 마커 표시
    const marker = new kakao.maps.Marker({
      position:markerPosition
    });

    marker.setMap(map);
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </>
  );
}

export default MapContainer