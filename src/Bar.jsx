import React, { useEffect } from 'react';
import './Bar.css'; // Make sure to create this CSS file

const AllBars = ({numbers, update}) => {

  useEffect(()=>{}, [update]);
  
  return (
    <div className="bars-container">
    {numbers.map((value, idx) => (
      <div key={idx} className="bar">
        <div
          className="bar-fill"
          style={{height:`${value}%`}} // Adjust the height of the bar as a percentage or px
        >
        </div>
        <div className="bar-number">
          {value}
        </div>
      </div>
    ))}
  </div>

  );
};

export default AllBars;
