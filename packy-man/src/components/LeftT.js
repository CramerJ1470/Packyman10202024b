import React from "react";
import "../index.css";
import RTOC from "./RTOC";
import RBOC2 from "./RBOC2";
import StroopWafels from "./StroopWafels";

const LeftT = () => {

	
	return (
		<>
			<div>
			<div id="a1"name="LeftT" className="block orig">
				<RTOC />
				<RBOC2 />
				<div className="rot270 ">
					<div className="line line1 leftvert"></div>
					<div className="line line2 leftvert"></div>
				</div>
				<StroopWafels block={"LeftT"}/>
			</div>
			</div>
		</>

	);
};

export default LeftT;
