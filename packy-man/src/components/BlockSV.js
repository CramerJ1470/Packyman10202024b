import React from "react";
import "../index.css";
import BlockSH from "./BlockSH";
import StroopWafels from "./StroopWafels";
import FullBottom from "./FullBottom";

const BlockSV = () => {
	return (
		<>
			<div>
				<div id="a3" name="BlockSV" className="block orig rot90">
					<div className="line line1 fulltop"></div>
					<div className="line line2 fulltop"></div>
					<div className="line line1 fullbottom"></div>
					<div className="line line2 fullbottom"></div>
					<StroopWafels block={"BlockSV"} />
				</div>
			</div>
		</>
	);
};

export default BlockSV;
