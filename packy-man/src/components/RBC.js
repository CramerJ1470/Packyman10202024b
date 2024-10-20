import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import StroopWafels from "./StroopWafels";

const RBC = () => {
	return (
		<>
			<div>
				<div id="a7" name="RBC" className="block orig rot270">
					<SLS />
					<LBIC />
					<SBS />
					<RTOC />
					<StroopWafels block={"RBC"} />
				</div>
			</div>
		</>
	);
};
export default RBC;
