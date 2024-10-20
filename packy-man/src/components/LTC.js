import React from "react";
import "../index.css";
import LBIC from "./LBIC";
import SBS from "./SBS";
import SLS from "./SLS";
import RTOC from "./RTOC";
import StroopWafels from "./StroopWafels";

const LTC = () => {
	return (
		<>
			<div>
				<div id="a7" name="LTC" className="block orig rot90">
					<SLS />
					<LBIC />
					<SBS />
					<RTOC />

					<StroopWafels block={"LTC"} />
				</div>
			</div>
		</>
	);
};
export default LTC;
