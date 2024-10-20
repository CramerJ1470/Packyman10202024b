import React from 'react';
const rightsideimage = require("../characters/pac-man-square.png");

function RightSide() {
  return (
    <>
    <div className="rightside">
        <img src={rightsideimage} alt="pac-man-square"/>
        <div id="directions" style={{ fontWeight: "bold", color: "white" }}>
				Use Numpad 4,8,6,2 (arrows) to move packyman
			</div>
        <span
    id="count"
    style={{
      flexDirection:"column",
      fontSize: "40px",
      fontWeight: "bold",
      color: "white",
    }}
  >
    0
  </span>
      
    </div>
  
  </>
  )
}

export default RightSide
