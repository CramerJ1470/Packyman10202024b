import React from "react";
import "../index.css";
import StroopWafels from "./StroopWafels";

const RightDE = () => {
	return (
		<>	
			<div id="a1" name="RightDE" className="block orig">
				<div className="line line1 rder"></div>
				<div className="line line2 rder"></div>
				<div className="line line1 top2"></div>
				<div className="line line2 top2 "></div>
				<div className="line line1 top2 dropBottom"></div>
				<div className="line line1 top2 dropBottom rot180 "></div>
				<StroopWafels block={"RightDE"}/>
			</div>
		</>
	);
};

export default RightDE;
