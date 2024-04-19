import React from 'react'
import { APIKEY } from '../api'
import MedObj from '../pages/MedObj';

const burl = `https://api.odcloud.kr/api/15036627/v1/uddi:0f3fb09a-d273-482f-9678-e106bc5f716e?page=1&perPage=500&returnType=JSON&serviceKey=${APIKEY}`

const ObjList = () => {
  return (
    <>
      <MedObj burl={burl}/>
    </>
  )
}

export default ObjList