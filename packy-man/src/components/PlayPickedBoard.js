import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import makeIntoBlocks from "../checkBlocks/makeIntoBlocks";
import Row from "./Row";
import Play from "./Play";
import ScoreContext from "../context/ScoreContext";
import { createStroops } from "../checkBlocks/pickRandomBlock";

const PlayPickedBoard = ({ isAuth, boards }) => {
	const navigate = useNavigate();
	const param1 = useParams();
	const _id = param1.id;
	//console.log(`_id:`, _id);
	let pickedBoard = boards.filter((board) => board._id === _id)[0];
	//console.log(pickedBoard);

	function endHandler(rows, userId) {
		const egos = document.getElementsByClassName("egos");
		for (let x = 0; x < egos.length; x++) {
			egos[x].classList.add("egodisplay");
			egos[x].classList.remove("ego");
		}
		document.getElementById("endgame").classList.add("ego");
		document.getElementById("directions").classList.add("egolist");
	}
	function closegameHandler(rows, userId) {
		console.log("close game happening");
	}
	function savegameHandler(rows, userId) {
		console.log("save game happening");
	}
	function backhomeHandler(userId) {
		console.log(`home1`);
	}

	const rows2 = pickedBoard.rows;
	let blocks = [];
	rows2.forEach((row) => {
		row.forEach((block) => {
			blocks.push(block);
		});
	});
	const newblocks = blocks.map((block, index) => {
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

	/**************score keeping**************/
	function add10ToCount(count) {
		count += 10;
		return count;
	}

	let score = document.getElementById("score");

	let pickedBoardRows = pickedBoard.rows;
	console.log(`pickedBoardRows:`, pickedBoardRows);
	let stroops = [];
	/********************Make Stroop Base Data****************************/
	pickedBoardRows.forEach((row) => {
		row.forEach((block) => {
			console.log(`PBR block:`, block);
			let positions = createStroops(block);
			positions.forEach((position) => {
				position.xCenter = block.xCenter;
				position.yCenter = block.yCenter;
				let stroopX = Number(
					position.x.slice(0, position.x.length - 3) - 4.5
				);
				//console.log(`stroopX:`, stroopX);
				let stroopY = Number(
					position.y.slice(0, position.y.length - 3) - 4.5
				);
				//console.log(`stroopY:`, stroopY);
				position.xloc = (position.xCenter + stroopX) * 10;
				position.yloc = (position.yCenter + stroopY) * 10;
				stroops.push(position);
			});
		});
	});
	//console.log(stroops);

	// let stroopsDiv = document.getElementById("stroops");
	// console.log(stroopsDiv);
	function backtohomeHandler(userId) {
		navigate("/home1");
	}

	return (
		<>
			<div id="stroops" className="stroops">
				{stroops.map((stroop) => {
					let stroopClass = `fa-solid fa-stroopwafel wafels x${stroop.xloc} y${stroop.yloc}`;
					return (
						<>
							<i className={stroopClass}></i>
						</>
					);
				})}
			</div>
			<div id="packy" className="packy openmouth"></div>

			<div className="sidebtn">
				{newRows.map((row, index) => {let borderOn = false; console.log(`inside PSB borderOn: `, borderOn)
					return (
						<>
							<div className="boardcard">
								<Row
									row={row}
									rowNum={index}
									index={index}
									borderOn={borderOn}
								/>
							</div>
						</>
					);
				})}
			</div>
			<div id="directions" style={{ fontWeight: "bold", color: "blue" }}>
				Use Numpad 4,8,6,2 (arrows) to move packyman
			</div>
			<span
				id="count"
				style={{
					fontSize: "40px",
					fontWeight: "bold",
					color: "white",
				}}
			>
				0
			</span>
			<Play
				columnsToKeep={columnsToKeep}
				rowsToKeep={rowsToKeep}
				stroops={stroops}
			/>

<div className="rightside gameoptions" id="gameoptions">
				<div id="endgame" className="egodisplay">
					<button className="btn" onClick={(event) => endHandler()}>
						End Game Options
					</button>
				</div>
				<div className="egos ego" id="backtohome">
					<button
						className="btn"
						onClick={(event) => backtohomeHandler()}
					>
						Back to Home
					</button>
				</div>
			</div>
		</>
	);
};

export default PlayPickedBoard;
