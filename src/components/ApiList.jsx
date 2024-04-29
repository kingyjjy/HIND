import React from 'react'
import { APIKEY } from '../api'
import AxiosData from './AxiosData';

const burl = `https://api.odcloud.kr/api/15036627/v1/uddi:0f3fb09a-d273-482f-9678-e106bc5f716e?page=1&perPage=500&returnType=JSON&serviceKey=${APIKEY}`

const ApiList = () => {
  return (
<<<<<<< HEAD
        <AxiosData burl={burl}/>
=======
    <>
      <AxiosData burl={burl}/>
    </>
>>>>>>> a8e63f98a632e4a42d1a4d0c6dcf1fabfb0e7604
  )
}

export default ApiList