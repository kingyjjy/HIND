import React, { useState } from 'react'

const Accordion = () => {
const data = ['09:00','09:30','10:00','10:30','11:00', '11:30','12:00','12:30','14:00','14:30','15:00','15:30','16:00', '16:30', '17:00','17:30', '18:00'];

  const [btnActive, setBtnActive] = useState();

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
        <div className="res-time d-flex">
            <div className="row times">
                {data.map((item, idx) => {
                    return (
                        <>
                            <button type='button'
                                value={idx}
                                className={"btn col-4" + (idx == btnActive ? " active" : "")} onClick={toggleActive}
                                >
                                {item}
                            </button>
                        </>
                    )
                })}
                
           </div>
        </div>
  )
}

export default Accordion