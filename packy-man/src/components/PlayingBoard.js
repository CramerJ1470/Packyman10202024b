// This code written by John E. Cramer
// GAARD
// https://github.com/CramerJ1470/packy-man.git
import React from "react";
import "../index.css";
import { pickRandomBlock, createStroops } from "../checkBlocks/pickRandomBlock";
import Row from "./Row";
import { useNavigate } from "react-router-dom";
import Play from "./Play";
import { addPlayingboard } from "../services";
const loggedindiv = require("./RegisterOrStart").loggedindiv;

const PlayingBoard = (isAuth) => {
	//const { setIsAuth, isAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	let blocks = [];
	for (let x = 0; x < 77; x++) {
		let block = pickRandomBlock(x, blocks);
		//console.log(`pickblock: `, block);
		blocks.push(block);
	}

	//console.log(`random board blocks: `, blocks);
	let rows = [];
	let newRow1 = [];
	for (let u = 0; u < blocks.length; u++) {
		if (
			u === 10 ||
			u === 21 ||
			u === 32 ||
			u === 43 ||
			u === 54 ||
			u === 65 ||
			u === 76
		) {
			newRow1.push(blocks[u]);
			rows.push(newRow1);
			newRow1 = [];
		} else {
			newRow1.push(blocks[u]);
		}
	}

	let newColumn = [];
	let columnsToKeep = [];
	let colStart;
	let colEnd;

	for (let cl = 12; cl < 21; cl++) {
		// starting Block
		let yList = [];
		let z;
		for (let nextCol = cl; nextCol < cl + 45; nextCol = nextCol + 11) {
			//*********************
			let currentBlock = blocks[nextCol];
			if (
				blocks[nextCol - 11].properties.d === "closed" &&
				currentBlock.properties.d === "open"
			) {
				colStart = currentBlock.yCenter;
			} else if (
				blocks[nextCol - 11].properties.d === "open" &&
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
	let allRows = [];
	for (let xx = 1; xx < rows.length - 1; xx++) {
		let row = rows[xx];
		let newRow = [];
		let end;
		let z;
		let start;

		for (let ay = 0; ay < row.length; ay++) {
			let currentBlock = blocks[xx * 11 + ay];

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
						blocks[currentBlock.x - 1].properties.c === "closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					} else if (
						blocks[currentBlock.x - 1].properties.c === "open" &&
						currentBlock.properties.c === "closed"
					) {
						end = currentBlock.xCenter; //sets offsetLeft
						z = currentBlock.yCenter; //sets offsetTop
						//*************look for matching y then just push x
						newRow.push({ start: start, end: end });
					} else if (
						blocks[currentBlock.x - 1].properties.c === "closed" &&
						currentBlock.properties.c === "open"
					) {
						start = currentBlock.xCenter;
					}
				}
			}
		}
		if (newRow.length > 0) {
			rowsToKeep.push({ y: z, x: newRow });
			newRow = [];
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

	console.log(rowsToKeep);

	//localStorage.setItem("rows", rows);

	const { username, id } = JSON.parse(localStorage.getItem("userData"));
	const userId = id;

	function endgameHandler(rows, userId) {
		const egos = document.getElementsByClassName("egos");
		console.log(egos);
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
	function backtohomeHandler(userId) {
		navigate("/home1");
	}
	let stroops = [];
	console.log(`rows:`, rows);

	rows.forEach((row) => {
		row.forEach((block) => {
			console.log(`PBR block:`, block);
			let positions = createStroops(block);
			positions.forEach((position) => {
				position.xCenter = block.xCenter;
				position.yCenter = block.yCenter;
				let stroopX = Number(
					position.x.slice(0, position.x.length - 3) - 4.5
				);
				console.log(`stroopX:`, stroopX);
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

	console.log(stroops);

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
			{rows.map((row, index) => {
				return <Row row={row} blocks={blocks} index={index} />;
			})}
			<div id="directions" style={{ fontWeight: "bold", color: "white" }}>
				Use Numpad 4,8,6,2 (arrows) to move packyman
			</div>
			<span
				id="count"
				style={{
					flexDirection: "column",
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

			{/* <RightSide /> */}
			<div className="rightside" id="gameoptions">
				<div id="endgame" className="egodisplay">
					<button
						className="btn"
						onClick={(event) => endgameHandler(rows, userId)}
					>
						End Game Options
					</button>
				</div>
				<div className="egod">
					{!isAuth ? (
						<>
							{/* <div className="egos ego" id="closegame">
							<button
								className="btn"
								onClick={(event) =>
									closegameHandler(rows, userId)
								}
							>
								Close Game
							</button>
						</div> */}

							<div className="egos ego" id="backtohome">
								<button
									className="btn"
									onClick={(event) =>
										backtohomeHandler(userId)
									}
								>
									Back to Home
								</button>
							</div>
						</>
					) : (
						<>
							{/* <div className="egos ego" id="closegame">
							<button
								className="btn"
								onClick={(event) =>
									closegameHandler(rows, userId)
								}
							>
								Close Game
							</button>
						</div> */}

							<div className="egos ego" id="backtohome">
								<button
									className="btn"
									onClick={(event) =>
										backtohomeHandler(userId)
									}
								>
									Back to Home
								</button>
							</div>
							{/* <div className="egos ego" id="savegame">
							<button
								className="btn"
								onClick={(event) =>
									savegameHandler(rows, userId)
								}
							>
								Save Game
							</button>
						</div> */}
							<div className="egos ego" id="saveboard">
								<button
									className="btn"
									onClick={(event) =>
											addPlayingboard(rows, userId)
									}
								>
									Save Board
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default PlayingBoard;
