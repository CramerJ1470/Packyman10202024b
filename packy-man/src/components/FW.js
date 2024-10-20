import React from "react";
import "../index.css";
import BotOpen from "./BotOpen";
import TopOpen from "./TopOpen";
import StroopWafels from "./StroopWafels";

const FW = () => {
	return (
		<>
			<div id="a7" name="FW" className="block orig">
				<TopOpen />
				<BotOpen />
				<StroopWafels block={"FW"} />
			</div>
		</>
	);
};

export default FW;
