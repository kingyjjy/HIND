import React from 'react'
import { APIKEY } from '../api'
import SearchList from '../pages/SearchList'

const burl = `https://openapi.gg.go.kr/SynthesizeHospital?key=${APIKEY}&type=json&pSize=700&pIndex=1&&2&SIGUN_CD=41570`;

const SearchApi = () => {
  return (
    <SearchList burl={burl} />
  )
}

export default SearchApi