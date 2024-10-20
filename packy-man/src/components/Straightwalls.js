import React from "react";
import "../index.css";
import LBN from "../components/LBN";
import SHT from "../components/SHT";
import LTN from "../components/LTN";
import LBV from "../components/LBV";
import LTV from "../components/LTV";
import LBOC from "./LTOC";
import SHB from "../components/SHB";
import LRN from "../components/LRN";
import RTN from "../components/RTN";

const Straightwall = () => {
	return (
		<>
			<div id="a1" className="block setup">
				<SHT />
				<LTN />
				<SHB />
				<LBN />
				<LRN />
				<RTN />
			</div>
		</>
	);
};

export default Straightwall;
