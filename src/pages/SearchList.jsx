import React from 'react'
import TopNav from '../layout/TopNav'
import Footer from '../layout/Footer'
import {BsSearch} from 'react-icons/bs'
import '../assets/css/searchlist.css';

const SearchList = () => {
  return (
    <>
        <TopNav/>
        <div className='container'>
            <div className="search-world position-relative mt-5">
            <input type="search" placeholder='검색어를 입력하세요.' className='searchbox form-control'/>
            <button type="submit" className=" btn"><BsSearch className='sicon position-absolute'/></button>
            </div>
        </div>
    </>
  )
}

export default SearchList