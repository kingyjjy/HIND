import React from 'react'
import { APIKEY } from '../api'
import MedObj from '../pages/MedObj';

const burl = `https://openapi.gg.go.kr/SynthesizeHospital?key=${APIKEY}&type=json&pSize=700&pIndex=1&&2&SIGUN_CD=41570`;

const ObjList = () => {
  return (
    <>
    <MedObj burl={burl}/>
    </>
  )
}

export default ObjList