import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import StroopWafels from "./StroopWafels";

const RTC = () => {
	return (
		<>
		<div>
			<div id="a7" name="RTC" className="block orig rot180">
				<SLS />
				<LBIC />
				<SBS />
				<RTOC />
				<StroopWafels block={"RTC"} />
			</div>
			</div>
		</>
	);
};
export default RTC;
