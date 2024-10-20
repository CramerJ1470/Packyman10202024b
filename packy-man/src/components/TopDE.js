import React from "react";
import "../index.css";
import RightDE from "./RightDE";
import StroopWafels from "./StroopWafels";

const TopDE = () => {
	return (
		<div  >
			 <div id="a1" name="TopDE"   className="block orig rot90">
				<div className="line line1 rder"></div>
				<div className="line line2 rder"></div>
				<div className="line line1 top2"></div>
				<div className="line line2 top2 "></div>
				<div className="line line1 top2 dropBottom"></div>
				<div className="line line1 top2 dropBottom rot180 "></div>
				
			</div>

			<StroopWafels block={"TopDE"} />
		</div>
	);
};

export default TopDE;
