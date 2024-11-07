// This code written by John E. Cramer
// GAARD
// https://github.com/CramerJ1470/packy-man.git

// Challenge to fix next== while the first comment is true, the larger problem is that you're trying to return JSX from an async method which won't work. you need to fetch your async data in componentDidMount() and call this.setState when your api returns instead of returning JSX directly –

import React from "react";
import "../index.css";
import Row from "./Row";
import { useNavigate } from "react-router-dom";
import makeIntoBlocks from "../checkBlocks/makeIntoBlocks";

export const SavedBoards = ({ isAuth,board, index }) => {
	

	const navigate = useNavigate();
	// const { token, username, id } = JSON.parse(
	// 	localStorage.getItem("userData")
	// );
	// const userId = id;
	// console.log(`savedboards boards: `,boards);
	// let boards1 = [];
	// boards.map((board) => boards1.push(board));
	// let rows = [];
	// boards.map((first, index) => {
	// 	if (index === 0) {
	// 		rows.push(first);
	// 	}
	// });
	// console.log(`rows: `, rows[0].rows);

	// //localStorage.setItem("rows", rows);


	const getBoard = function (e) {
		const _id = e.target.innerText;

		console.log(`getting board alright?: `, _id);
		navigate(`../playpickedboard/${_id}`);
	};
	const rows2 = board.rows;
	let blocks = [];
	rows2.forEach((row) => {
		row.forEach((block) => {
			blocks.push(block);
		});
	});
	const newblocks = blocks.map((block, index) => {console.log("MIB block,index:",block,",",index);
		return makeIntoBlocks(index, block);
	});
	let newRows = [];
	let newRow = [];
	for (let a = 0; a < 77; a++) {
		if (a !== 0 && a % 11 === 0) {
			newRows.push(newRow);
			newRow = [];
			newRow.push(newblocks[a]);
		} else if (a === 76) {
			newRow.push(newblocks[a]);
			newRows.push(newRow);
		} else {
			newRow.push(newblocks[a]);
		}
	}

	let columnsToKeep = [];
	let colStart;
	let colEnd;

	for (let cl = 12; cl < 21; cl++) {
		// starting Block
		let yList = [];
		let z;
		for (let nextCol = cl; nextCol < cl + 45; nextCol = nextCol + 11) {
			//*********************
			let currentBlock = newblocks[nextCol];
			if (
				newblocks[nextCol - 11].properties.d === "closed" &&
				currentBlock.properties.d === "open"
			) {
				colStart = currentBlock.yCenter;
			} else if (
				newblocks[nextCol - 11].properties.d === "open" &&
				currentBlock.properties.d === "closed"
			) {
				colEnd = currentBlock.yCenter; //sets offsetLeft
				z = currentBlock.xCenter; //sets offsetTop

				//*************look for matching y then just push x
				yList.push({ start: colStart, end: colEnd });
			}
		}

		if (yList.length !== 0) {
			columnsToKeep.push({ x: z, y: yList });
			yList = [];
		}
	}

	//**********Create data that will be used by characters for moving based on the game board************/

	// *****************on a given Y the start-end of each row path  **********************

	let rowsToKeep = [];
	for (let xx = 1; xx < newRows.length - 1; xx++) {
		let row1 = newRows[xx];
		let newRow1 = [];
		let end;
		let z;
		let start;

		for (let ay = 0; ay < row1.length; ay++) {
			let currentBlock = newblocks[xx * 11 + ay];

			if (
				[
					"CornBord",
					"vertBord",
					"HorizBord",
					"TopDE",
					"BottDE",
					"Empty",
				].includes(currentBlock.blockName) === false
			) {
				if (currentBlock.x > 0) {
					if (
						newblocks[currentBlock.x - 1].properties.c ===
							"closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					} else if (
						newblocks[currentBlock.x - 1].properties.c === "open" &&
						currentBlock.properties.c === "closed"
					) {
						end = currentBlock.xCenter; //sets offsetLeft
						z = currentBlock.yCenter; //sets offsetTop
						//*************look for matching y then just push x
						newRow1.push({ start: start, end: end });
					} else if (
						newblocks[currentBlock.x - 1].properties.c ===
							"closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					}
				}
			}
		}
		if (newRow1.length > 0) {
			rowsToKeep.push({ y: z, x: newRow1 });
			newRow1 = [];
		}
	}

	//****************test print out rowsToKeep***********************//
	let yCheck = 16.5;
	rowsToKeep.forEach((row) => {
		if (row.y === yCheck) {
			let ans = row.x;
			ans.forEach((item) => {});
		}
	});

	//****************test print out rowsToKeep***********************//
	let xCheck = 16.5;
	columnsToKeep.forEach((col) => {
		if (col.x === xCheck) {
			let ans = col.y;
			ans.forEach((item) => {});
		}
	});
	
	console.log("NewRos inside: ",newRows);

	return (
		<>
			
			<div id="packy" className="packy openmouth"></div>
			<div className="sidebtn">
				{newRows.map((row, index) => { console.log("inside newRows: ",row,",index:",index);
					return (
						<>
							<div className="boardcard">
								<Row
									row={row} rowNum={index} borderOn={false}
									
								/>
							</div>
						</>
					);
				})}
				<button
					onClick={getBoard}
					key={board._id}
					className="rightzero"
				>
					{board._id}
				</button>
			</div>
			{/* <div id="directions" style={{ fontWeight: "bold", color: "blue" }}>
				Use Numpad 4,8,6,2 (arrows) to move packyman
			</div>
			<Play columnsToKeep={columnsToKeep} rowsToKeep={rowsToKeep} />
			<div id="endgame" className="egodisplay">
				<button
					className="btn"
					onClick={(event) => endHandler()}
				>
					End Game Options
				</button>
			</div>
			<div className="egos ego" id="backtohome">
				<button
					className="btn"
					onClick={(event) => backhomeHandler()}
				>
					Back to Home
				</button>
			</div>  */}
		</>
	);
};
export default SavedBoards;
