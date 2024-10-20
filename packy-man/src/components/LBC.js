import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import StroopWafels from "./StroopWafels";

const LBC = () => {
	return (
		<>
			
			<div>
				<div id="a7" name="LBC" className="block orig">
					<SLS />
					<LBIC />
					<SBS />
					<RTOC />
					<StroopWafels block={"LBC"} />
				</div>
			</div>
		</>
	);
};
export default LBC;
