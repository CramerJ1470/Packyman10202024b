// https://github.com/CramerJ1470/packy-man.git
import React, { useState, useContext, useEffect } from "react";

import { pickBlocksToChange } from "../../checkBlocks/pickRandomBlock";

import Row from "../Row";

import { useNavigate } from "react-router-dom";
import Theme from "../Theme";
import Play from "../Play";
import PickedBlockList from "./PickedBlockList";
import { saveboardHandler,getListItems1} from "../../services";
import AuthContext from "../../context/AuthContext";
import ListOfBlocksContext from "../../context/ListOfBlocksContext";
import PickedBlocksToChangeContext from "../../context/PickedBlocksToChangeContext";
import BuildRowsContext from "../../context/BuildRowsContext";
import ListItemsContext from "../../context/ListItemsContext";
import Block from "../../scripts/Block";

let listItems1 = [];
const border1 = true;
const loggedindiv = require("../RegisterOrStart").loggedindiv;
localStorage.setItem("pickedBlockIndex", "");


const DragAndDrop1 = ({ isAuth, listOfBlock, buildRows}) => {

	
	const isit = { isAuth };
	console.log(`isit: `, isit);

	 const { setListItems1, listItems1} = useContext(ListItemsContext);
	const navigate = useNavigate();

	const blockList = [
		{ ltc: new Block("LTC") },
		{ fw: new Block("FW") },
		{ lbc: new Block("LBC") },
		{ blocksh: new Block("BlockSH") },
		{ blocksv: new Block("BlockSV") },
		{ rbc: new Block("RBC") },
		{ rtc: new Block("RTC") },
		{ topt: new Block("TopT") },
		{ rightt: new Block("RightT") },
		{ bott: new Block("BotT") },
		{ topde: new Block("TopDE") },
		{ bottde: new Block("BottDE") },
		{ rightde: new Block("RightDE") },
		{ leftde: new Block("LeftDE") },
		{ empty: new Block("Empty") },
		{ unchosen: new Block("Unchosen") },
	];
	let blocks = [];
	const blocks1 = [
		"BotT",
		"LTC",
		"FW",
		"LBC",
		"BlockSV",
		"BlockSH",
		"RBC",
		"RTC",
		"TopT",
		"LeftT",
		"RightT",
		"Empty",
		"Unchosen",
	];
	let fullList = [];
	let newBlock;
	for (let x = 0; x < 77; x++) {
		if (x === 0 || x === 10 || x === 66 || x === 76) {
			newBlock = new Block("CornBord", x);
		} else if (x > 0 && x < 10) {
			newBlock = new Block("HorizBord", x);
		} else if (x === 38) {
			newBlock = new Block("FW", x);
		} else if (x % 11 === 0 && x !== 0 && x !== 66) {
			newBlock = new Block("VertBord", x);
		} else if ((x + 1) % 11 === 0) {
			newBlock = new Block("VertBord", x);
		} else if (x > 11 && x < 65) {
			newBlock = new Block("Unchosen", x);
		} else if (x > 66 && x < 76) {
			newBlock = new Block("HorizBord", x);
		}

		blocks.push(newBlock);
	}

	//const border1 = true;

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

	// console.log(rowsToKeep);

	//localStorage.setItem("rows", rows);

	const { username, id } = JSON.parse(localStorage.getItem("userData"));
	const userId = id;

	function endgameHandler(rows, userId) {
		const egos = document.getElementsByClassName("egos");
		//console.log(egos);
		for (let x = 0; x < egos.length; x++) {
			egos[x].classList.add("egodisplay");
			egos[x].classList.remove("ego");
		}
		document.getElementById("endgame").classList.add("ego");
		document.getElementById("directions").classList.add("egolist");
	}
	function closegameHandler(rows, userId) {
		//console.log("close game happening");
	}
	function savebuiltgameHandler() {
		let arrayOfBlocks = document.getElementsByClassName("block");
		let arrayToSave = Array.from(arrayOfBlocks).slice(0, 77);

		alert("save game happening");
		console.log(`arrayOfBlocks: `, arrayToSave);
		let newRows = [];
		let row = [];
		for (let x = 0; x < arrayToSave.length; x++) {
			console.log(arrayToSave[x].getAttribute("name"));

			console.log(x);
			if ((x + 1) % 11 === 0) {
				console.log(x);
				let block = arrayToSave[x].getAttribute("name");
				let newBlock = new Block(block, x);
				console.log(newBlock);
				row.push(newBlock);
				newRows.push(row);
				row = [];
			} else if ((x + 1) % 11 !== 0) {
				let block = arrayToSave[x].getAttribute("name");
				console.log(block);
				let newBlock = new Block(block, x);
				row.push(newBlock);
			}
		}
		console.log(newRows);
		let userId = JSON.parse(localStorage.userData).id;

		saveboardHandler(newRows, userId);
	}
	function backtohomeHandler(userId) {
		navigate("/home1");
	}
	let stroops = [];
	
	let pickedBlockName;
	let pickedBlockId;
	let pickedMatrix;
	const noChangeBlocks = ["CornBord", "HorizBord", "VertBord"];
	function changeColor(e) {

		function addChangecolorPicked(e) {e.target.classList.add("changecolor");e.target.classList.add("picked1");}
		 const hasClass = e.target.parentNode.classList.contains("changecolor");
		 console.log(`hasClass:`,hasClass);
		const cantBe = ["HorizBord", "VertBord", "CornBord"];
		if (
			cantBe.includes(e.target.getAttribute("name")) ||
			Number(e.target.parentNode.getAttribute("id")) === 38 ||
			hasClass

		) {
			return;
		} else {
			let allitems = document.getElementsByClassName("changecolor");
			console.log(allitems);
			for (let aitem of allitems) {
				// console.log(aitem.classList);
				aitem.classList.remove("changecolor");
			}
			
			setTimeout(10000, addChangecolorPicked);

			pickedBlockName = e.target.getAttribute("name");

			pickedBlockId = e.target.parentNode.getAttribute("id");
			let newListBlocks1 = document.getElementsByClassName("orig");
			let newList1 = Array.from(newListBlocks1);
			console.log(`pickedBlockId:`, pickedBlockId);
			if (
				noChangeBlocks.includes(pickedBlockName) ||
				Number(localStorage.getItem("pickedBlockIndex") === 38)
			) {
				document.getElementById(
					"pickedBlocksDivText"
				).innerHTML = `Current Block: ${pickedBlockName}<br> Cannot be Changed`;
				localStorage.removeItem("pickedBlockIndex");
				return;
			} else {
				document.getElementById(
					"pickedBlocksDivText"
				).innerHTML = `Current Block: ${pickedBlockName}<br> Pick a block from below!`;

				localStorage.setItem("pickedBlockName", pickedBlockName);

				pickedMatrix = getMatrix(pickedBlockId);

				localStorage.setItem("PM1", [
					pickedMatrix.a,
					pickedMatrix.b,
					pickedMatrix.c,
					pickedMatrix.d,
				]);

				localStorage.setItem("pickedBlockIndex", Number(pickedBlockId));

				console.log(`picked block:`, e.target);
				let listitems = getListItems(pickedMatrix);
				localStorage.setItem("listitems", listitems);
				setListItems1(listitems);
				console.log(`dad listitems:`, listitems);
				console.log(`lsitems:`, localStorage.getItem("listitems"));
				
				// let list = pickBlocksToChange(
				// 	pickedBlockId,
				// 	newList1,
				// 	pickedBlockName
				// );
				// console.log(`picked list:`, list);
			}
		}
	}

	function getListItems(pickedMatrix) {
		let listArray = [];
		
		console.log(Number(localStorage.getItem("pickedBlockId")));
		console.log(
			document.getElementsByClassName("block")[
				Number(localStorage.getItem("pickedBlockIndex"))
			]
		);
		console.log(`pickedMatrix:`, pickedMatrix);
		const listToCheck = [
			new Block("FW"),
			new Block("TopDE"),
			new Block("BottDE"),
			new Block("RightDE"),
			new Block("LeftDE"),
			new Block("TopT"),
			new Block("BotT"),
			new Block("RightT"),
			new Block("LeftT"),
			new Block("BlockSV"),
			new Block("BlockSH"),
			new Block("Empty"),
			new Block("LBC"),
			new Block("LTC"),
			new Block("RBC"),
			new Block("RTC"),
		];
		for (let i = 0; i < listToCheck.length; i++) {
			let count = 0;
			console.log(i, `block:`, listToCheck[i]);
			console.log(i, `block:`, listToCheck[i].properties);
			if (
				pickedMatrix.a === "both" ||
				pickedMatrix.a === listToCheck[i].properties.a
			) {
				count++;
				console.log(`match:`, i, count);
			} else {
				count = 0;
			}
			if (
				pickedMatrix.b === listToCheck[i].properties.b ||
				pickedMatrix.b === "both"
			) {
				count++;
				console.log(`match:`, i, count);
			} else {
				count = 0;
			}
			if (
				pickedMatrix.c === listToCheck[i].properties.c ||
				pickedMatrix.c === "both"
			) {
				count++;
				console.log(`match:`, i, count);
			} else {
				count = 0;
			}
			if (
				pickedMatrix.d === listToCheck[i].properties.d ||
				pickedMatrix.d === "both"
			) {
				count++;
				console.log(`match:`, i, count);
				if (count === 4) {
					listArray.push(listToCheck[i].blockName);
					count = 0;
				}
			} else {
				count = 0;
			}
		}
		return listArray;
	}
	function getMatrix(x) {
		console.log(`getMatrix: `, x);
		x = Number(x);
		let aBlock = blocks[Number(x) - 1].properties.c;
		let bBlock = blocks[Number(x) - 11].properties.d;
		let cBlock = blocks[Number(x) + 1].properties.a;
		let dBlock = blocks[Number(x) + 11].properties.b;
		console.log(`getMatrix: `, aBlock, bBlock, cBlock, dBlock);
		let getMatrixAns = { a: aBlock, b: bBlock, c: cBlock, d: dBlock };
		return getMatrixAns;
	}
	function theListeners() {
		let items = document.getElementsByClassName("orig");
		//console.log( items);
		let initialBlocks = Array.from(items);
		initialBlocks.map((item, index) => {
			return index < 77;
		});

		//console.log(`initial blocks:`,initialBlocks);
		localStorage.setItem("Blocks", initialBlocks);

		for (let item of initialBlocks) {
			item.addEventListener("click", changeColor);
		}
	}
	theListeners();
	//console.log(`rows:`, rows);

	const [refresh, setRefresh] = useState();
	// const [sideListItems, setSideListItems] = useState([]);

	function refreshPage(e) {
		const bool = false;
		console.log(bool);
		setRefresh(false);
	}

	// console.log(`dad listofblocks: `, listOfBlocks);

	return (
		<>
			{/* <div id="packy" className="packy openmouth"></div> */}
			{rows.map((row, index) => {
				console.log(row);
				return (
					<Row
						row={row}
						rowNum={index}
						borderOn={false}
						index={index}
					/>
				);
			})}
			{/* <div id="directions" style={{ fontWeight: "bold", color: "white" }}>
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
			</span> */}
			<div className="directions1">
				<div
					id="directions"
					style={{ fontWeight: "bold", color: "white" }}
				>
					{" "}
					To assign/change inner blocks, click on inner block you want
					to change, then click a block from the side bar. Upon
					completion click on SAVE button.
				</div>
			</div>
			<button className="btn" onClick={(event) => refreshPage()}>
				Get Started
			</button>
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
						onClick={(event) => backtohomeHandler(userId)}
					>
						Back to Home
					</button>
				</div>
				<div className="egodisplay" id="savebuiltgame">
					<button
						className="btn"
						onClick={(event) => savebuiltgameHandler()}
					>
						Save Game
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

							{/* <div className="egos ego" id="backtohome">
								<button
									className="btn"
									onClick={(event) =>
										backtohomeHandler(userId)
									}
								>
									Back to Home
								</button>
							</div> */}
							{/* <div className="egos ego" id="savegame">
								<button
									className="btn"
									onClick={(event) =>
										savebuiltgameHandler(rows, userId)
									}
								>
									Save Game
								</button>
							</div> */}
							{/* <div className="egos ego" id="saveboard">
								<button
									className="btn"
									onClick={(event) =>
										saveboardHandler(rows, userId)
									}
								>
									Save Board
								</button>
							</div> */}
						</>
					)}
				</div>

				<div className="pickblocksdiv" id="pickedBlocksDiv">
					<div>
						<div id="pickedBlocksDivText">Pick your block!</div>
						<PickedBlockList
							listBlocks={listItems1}
							blocks={blocks}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DragAndDrop1;