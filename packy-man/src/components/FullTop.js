import React from "react";
import "../index.css";
import FullBottom from "./FullBottom";

const FullTop = () => {
	return (
		<>
			<div >
				<div className="line line1 fulltop"></div>
				<div className="line line2 fulltop"></div>
				<FullBottom />
			</div>
		</>
	);
};

export default FullTop;
