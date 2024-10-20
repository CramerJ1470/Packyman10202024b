import React from "react";
import "../index.css";
 
import StroopWafels from "./StroopWafels";

const LeftDE = () => {
	return (
		<>
			<div>
				<div id="a1" name="LeftDE" className="block rot180 orig row">
					<div >
						<div className="line line1 rder"></div>
						<div className="line line2 rder"></div>
						<div className="line line1 top2"></div>
						<div className="line line2 top2 "></div>
						<div className="line line1 top2 dropBottom"></div>
						<div className="line line1 top2 dropBottom rot180 "></div>
					</div>
				</div>
				<StroopWafels block={"LeftDE"} />
			</div>
		</>
	);
};

export default LeftDE;
