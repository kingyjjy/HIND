import React from 'react'

const Calendar = () => {
  return (
        <table className='calendar'>
            <thead>
                <tr>
                    <td>&#60;</td>
                    <td colSpan="5">
                        <span id='CalYear'></span>년
                        <span id='CalMonth'></span>월
                    </td>
                    <td>&#62;</td>
                </tr>
                <tr>
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                    </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
  )
}

export default Calendar