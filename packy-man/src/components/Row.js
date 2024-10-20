import React from "react";
import "../index.css";

import Eachone from "./Eachone";
//import updateAllRows from "./PlayingBoard";

const Row = ({ row, rowNum,borderOn }) => {
	// *****************on a given X the start-end of each column path  **********************

	console.log('Row row:',row);
	// console.log(`Row borderOn:`, borderOn);
	return (
		<>
			<div className="row">
				{row.map((block, index) => {
					console.log(`Row block:`, block ,"index:",index);
					// 	`index:`,
					// 	index,
					// 	`block.xCenter:`,
					// 	block.xCenter,
					// 	`block.yCenter:`,
					// 	block.yCenter
					// );
					let newId = index + (rowNum * 11);
					console.log("newId: ",newId);
					return (
						<div id={newId}>
							<Eachone
								block={block}
								index={block.x}
								key={newId}
								blockNum={block.x}
								borderOn={borderOn}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Row;
