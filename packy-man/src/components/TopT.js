import React from "react";
import "../index.css";
import TopOpen from "./TopOpen";
import FullBottom from "./FullBottom";
import StroopWafels from "./StroopWafels";

const TopT = () => {
	
	return (
		<>
			<div>
				<div id="a1" name="TopT" className="block orig">
					<FullBottom />
					<TopOpen />
					<StroopWafels block={"TopT"} />
				</div>
			</div>
		</>
	);
	
};

export default TopT;
