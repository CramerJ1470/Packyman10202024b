import React from "react";
import "../index.css";

import StroopWafels from "./StroopWafels";
import RTOC from "./RTOC";
import RBOC2 from "./RBOC2";

const RightT = () => {
	return (<>
		<div>
			<div id="a1" name="RightT" className="block orig rot180">
				<RTOC />
				<RBOC2 />
				<div className="rot270 ">
					<div className="line line1 leftvert"></div>
					<div className="line line2 leftvert"></div>
					<StroopWafels block={"RightT"} />
				</div>
			</div>
			</div>
		</>
	);
};

export default RightT;
