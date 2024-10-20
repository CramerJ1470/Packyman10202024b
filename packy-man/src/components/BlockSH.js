import React from "react";
import "../index.css";
import FullBottom from "./FullBottom";
import FullTop from "./FullTop";
import StroopWafels from "./StroopWafels";

const BlockSH = () => {
	return (
		<>
			 
				<div id="a1" name="BlockSH" className="block orig">
					<FullTop />
					<FullBottom />
					<StroopWafels block={"BlockSH"} />
				</div>
			 
		</>
	);
};

export default BlockSH;
