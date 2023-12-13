import React from 'react'
import { APIKEY } from '../api'
import AxiosData from './AxiosData';
const burl = `https://openapi.gg.go.kr/SynthesizeHospital?key=${APIKEY}&type=json&pSize=700&pIndex=1&&2&SIGUN_CD=41570`;

const ApiList = () => {
  return (
        <AxiosData burl={burl}/>
  )
}

export default ApiList