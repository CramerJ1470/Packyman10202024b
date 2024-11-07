import React from "react";
import "../index.css";
import { createStroopWafels } from "../checkBlocks/pickRandomBlock";

const StroopWafels = (block) => {
	//console.log(`stroop block`,block);
	let positions = createStroopWafels(block);
	//console.log(positions);
	let horiz = Object.entries(positions.horiz);
	//console.log(horiz);
	let vert = Object.entries(positions.vert);
	let stroopwafels = [];
	horiz.forEach((each) => {
		stroopwafels.push(each[1]);
	});
	vert.forEach((each) => {
		stroopwafels.push(each[1]);
	});

	//console.log(`picked wafel:`,document.getElementById("wafel1"));
	return (
		<>
			{/* {stroopwafels.map((wafel,index) => {//console.log(`wafel:`,wafel);
				return (<Wafel wafel={wafel} index={index}/>)
			})} */}
		</>
	);
};

export default StroopWafels;
