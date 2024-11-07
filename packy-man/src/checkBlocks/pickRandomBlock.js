import Block from "../scripts/Block";

const pickRandomBlock = (x, blocks) => {
	
	
	
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
	];
	//	"TopDE",
	// "BottDE",
	// "RightDE",
	// "LeftDE",
	// "horizBord",
	// "vertBord",
	// "cornBord"

	// This code written by John E. Cramer
	// GAARD
	// https://github.com/CramerJ1470/packy-man.git
	let build = false;
	newBlock = pickBlock(x, blocks, blocks1, build);
	return newBlock;
};



let newBlock;
function pickBlock(x, blocks, blocks1, build) {
	let matrix;

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
	} else if (x > 10 && x < 54) {
		if (x === 20 && blocks[x - 1].properties.c === "open") {
			matrix = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "open",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else if (x === 20 && blocks[x - 1].properties.c === "closed") {
			newBlock = new Block("Empty", x);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "closed"
		) {
			matrix = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "open",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "open"
		) {
			matrix = {
				a: "closed",
				b: "open",
				c: "closed",
				d: "open",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "closed"
		) {
			newBlock = new Block("Empty", x);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "open"
		) {
			matrix = {
				a: "open",
				b: "open",
				c: "closed",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else if (x === 27) {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				//c: Math.random() < 0.5 ? "open" : "closed",
				d: "open",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else if (x === 37) {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				c: "open",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		} else {
			console.log(`285 x:`, x);
			console.log(`286blocks;`, blocks);
			console.log(`c: `, blocks[x - 1].properties.c);
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				//c: Math.random() < 0.5 ? "open" : "closed",
				d: Math.random() < 0.5 ? "open" : "closed",
			};
			newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
		}
	}
	if (
		x === 64 &&
		blocks[x - 1].properties.c === "open" &&
		blocks[x - 11].properties.d === "closed"
	) {
		newBlock = new Block("RightDE", x);
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "closed" &&
		blocks[x - 11].properties.d === "open"
	) {
		newBlock = new Block("TopDE", x);
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "closed" &&
		blocks[x - 11].properties.d === "closed"
	) {
		newBlock = new Block("Empty", x);
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "open" &&
		blocks[x - 11].properties.d === "open"
	) {
		newBlock = new Block("RBC", x);
	} else if (x > 55 && x < 64) {
		let matrix = {
			a: blocks[x - 1].properties.c,
			b: blocks[x - 11].properties.d,
			d: "closed",
		};
		newBlock = matrixMatch(matrix, blocks1, x, blocks, build);
	} else if (x > 66 && x < 76) {
		newBlock = new Block("HorizBord", x);
	}
	return newBlock;
}

function pickBlocks(x, blocks, blocks1) {
	let matrix;
	console.log(`pickblocks blocks:`,blocks);

	if (x === 0 || x === 10 || x === 66 || x === 76) {
		newBlocks = [];
	} else if (x > 0 && x < 10) {
		newBlocks = [];
	} else if (x === 38) {
		newBlocks = [];
	} else if (x % 11 === 0 && x !== 0 && x !== 66) {
		newBlocks = [];
	} else if ((x + 1) % 11 === 0) {
		newBlocks = [];
	} else if (x > 10 && x < 54) {
		if (x === 20 && blocks[x - 1].properties.c === "open") {
			matrix = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "open",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else if (x === 20 && blocks[x - 1].properties.c === "closed") {
			newBlocks = [new Block("BottDE", x)];
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "closed"
		) {
			matrix = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "open",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "open"
		) {
			matrix = {
				a: "closed",
				b: "open",
				c: "closed",
				d: "open",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "closed" &&
			blocks[x - 11].properties.d === "closed"
		) {
			newBlocks = [new Block("Empty", x)];
		} else if (
			(x + 2) % 11 === 0 &&
			blocks[x - 1].properties.c === "open" &&
			blocks[x - 11].properties.d === "open"
		) {
			matrix = {
				a: "open",
				b: "open",
				c: "closed",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else if (x === 27) {
			
			matrix = {
				
					
				
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				//c: Math.random() < 0.5 ? "open" : "closed",
				d: "open",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else if (x === 37) {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				c: "open",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		} else {
			matrix = {
				a: blocks[x - 1].properties.c,
				b: blocks[x - 11].properties.d,
				//c: Math.random() < 0.5 ? "open" : "closed",
				d: Math.random() < 0.5 ? "open" : "closed",
			};
			newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
		}
	}
	if (
		x === 64 &&
		blocks[x - 1].properties.c === "open" &&
		blocks[x - 11].properties.d === "closed"
	) {
		newBlocks = [new Block("RightDE", x)];
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "closed" &&
		blocks[x - 11].properties.d === "open"
	) {
		newBlocks = [new Block("TopDE", x)];
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "closed" &&
		blocks[x - 11].properties.d === "closed"
	) {
		newBlocks = [new Block("Empty", x)];
	} else if (
		x === 64 &&
		blocks[x - 1].properties.c === "open" &&
		blocks[x - 11].properties.d === "open"
	) {
		newBlocks = [new Block("RBC", x)];
	} else if (x > 55 && x < 64) {
		let matrix = {
			a: blocks[x - 1].properties.c,
			b: blocks[x - 11].properties.d,
			d: "closed",
		};
		newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
	} else if (x > 66 && x < 76) {
		newBlocks = [new Block("HorizBord", x)];
	}
	return newBlocks;
}

function matrixMatch(matrix, blocks1, x, blocks, build) {
	let blocksToMatch = [];
	let blockChosen;

	blocks1.forEach((block) => {
		let newComp = new Block(block, x); // blockName

		//let code = { html: newComp }; sets a variable to the component

		blocksToMatch.push(newComp);
	});
	console.log(`bTM:`, blocksToMatch);

	blockChosen = check(matrix, blocksToMatch);

	if (x > 0 && blockChosen === blocks[x - 1]) {
		check(matrix, blocksToMatch);
	}

	return blockChosen;
}

function matrixMatch1(matrix, blocks1, x, blocks) {
	let blocksToMatch = [];

	blocks1.forEach((block) => {
		let newComp = new Block(block, x); // blockName

		//let code = { html: newComp }; sets a variable to the component

		blocksToMatch.push(newComp);
	});
	//console.log(`bTM:`,blocksToMatch);

	let blocksChosen = check1(matrix, blocksToMatch);

	return blocksChosen;
}
function check(matrix, blocksToMatch) {
	let matrixMatches = [];

	blocksToMatch.forEach((block) => {
		let checkCount = Object.keys(matrix).length;
		let count = 0;
		if (matrix.a && block.properties.a === matrix.a) {
			count++;
		}
		if (matrix.b && block.properties.b === matrix.b) {
			count++;
		}
		if (matrix.c && block.properties.c === matrix.c) {
			count++;
		}

		if (matrix.d && block.properties.d === matrix.d) {
			count++;
		}
		if (count === checkCount) {
			matrixMatches.push(block);
			count = 0;
		} else {
			count = 0;
		}
	});

	let pickedNum = Math.floor(Math.random() * matrixMatches.length);
	return matrixMatches[pickedNum];
}

function check1(matrix, blocksToMatch) {
	let matrixMatches = [];

	blocksToMatch.forEach((block) => {
		let checkCount = Object.keys(matrix).length;
		let count = 0;
		if (matrix.a && block.properties.a === matrix.a) {
			count++;
		} else if (matrix.a === "both") {
			count++;
		}
		if (matrix.b && block.properties.b === matrix.b) {
			count++;
		} else if (matrix.b === "both") {
			count++;
		}
		if (matrix.c && block.properties.c === matrix.c) {
			count++;
		} else if (matrix.c === "both") {
			count++;
		}

		if (matrix.d && block.properties.d === matrix.d) {
			count++;
		} else if (matrix.d === "both") {
			count++;
		}
		if (count === checkCount) {
			matrixMatches.push(block);

			count = 0;
		} else {
			count = 0;
		}
	});

	return matrixMatches;
}
function createStroopWafels(block) {
	let type = block.block.toLowerCase();
	let positions;
	const b = {
		x: "4.5rem",
		y: "4.5rem",
	};
	const d = {
		x: "9.5rem",
		y: "4.5rem",
	};
	const f = {
		x: "4.5rem",
		y: "4.5rem",
	};
	const h = {
		x: "4.5rem",
		y: "9.5rem",
	};
	switch (type) {
		case "bott":
			positions = {
				horiz: { b: b, d: d },
				vert: { h: h }, //f,f
			};
			break;
		case "ltc":
			positions = {
				horiz: { b: b, d: d },
				vert: { h: h }, //f,f
			};
			break;
		case "fw":
			positions = {
				horiz: { b: b, d: d },
				vert: { h: h }, //f,f
			};
			break;
		case "lbc":
			positions = {
				horiz: { b: b, d: d },
				vert: {}, //f,f
			};
			break;
		case "blocksv":
			positions = {
				horiz: {},
				vert: { f: f, h: h },
			};
			break;
		case "blocksh":
			positions = {
				horiz: { b: b, d: d },
				vert: {},
			};
			break;
		case "empty":
			positions = {
				horiz: {},
				vert: {},
			};
			break;
		case "rbc":
			positions = {
				horiz: { b: b },
				vert: { f: f },
			};
			break;
		case "rtc":
			positions = {
				horiz: { b: b },
				vert: { h: h }, //f,f
			};
			break;
		case "topt":
			positions = {
				horiz: { b: b, d: d },
				vert: {}, //f,f
			};
			break;
		case "leftt":
			positions = {
				horiz: { b: b, d: d },
				vert: { h: h }, //f,f
			};
			break;
		case "rightt":
			positions = {
				horiz: { b: b },
				vert: { h: h }, //f,f
			};
			break;
		case "topde":
			positions = {
				horiz: { b: b },
				vert: {}, //f,f
			};
			break;
		case "rightde":
			positions = {
				horiz: { b: b },
				vert: {}, //f,f
			};
			break;
		case "bottde":
			positions = {
				horiz: { b: b },
				vert: { h: h }, //f,f
			};
			break;
		case "leftde":
			positions = {
				horiz: { b: b, d: d },
				vert: {}, //f,f
			};
			break;
		case "horizbord":
			positions = {
				horiz: {},
				vert: {},
			};
			break;
		case "vertbord":
			positions = {
				horiz: {},
				vert: {},
			};
			break;
		case "cornbord":
			positions = {
				horiz: {},
				vert: {},
			};
			break;
		default:
			console.log(`Not block found`);
	}
	return positions;
}
function createStroops(block) {
	let type = block.blockName.toLowerCase();
	let positions;
	const b = {
		x: "4.5rem",
		y: "4.5rem",
	};
	const d = {
		x: "9.5rem",
		y: "4.5rem",
	};
	const f = {
		x: "4.5rem",
		y: "4.5rem",
	};
	const h = {
		x: "4.5rem",
		y: "9.5rem",
	};
	switch (type) {
		case "bott":
			positions = [b, d, h]; //f
			//f
			break;
		case "ltc":
			positions = [b, d, h]; //f
			break;
		case "fw":
			positions = [b, d, h]; //f
			break;
		case "lbc":
			positions = [b, d]; //f
			break;
		case "blocksv":
			positions = [f, h];
			break;
		case "blocksh":
			positions = [b, d];
			break;
		case "empty":
			positions = [];
			break;
		case "rbc":
			positions = [b, f];
			break;
		case "rtc":
			positions = [b, h]; //f
			break;
		case "topt":
			positions = [b, d]; //f
			break;
		case "leftt":
			positions = [b, d, h]; //f
			break;
		case "rightt":
			positions = [b, h]; //f
			break;
		case "topde":
			positions = [b]; //f
			break;
		case "rightde":
			positions = [b]; //f
			break;
		case "bottde":
			positions = [b, h]; //f
			break;
		case "leftde":
			positions = [b, d];
			break;
		case "horizbord":
			positions = [];
			break;
		case "vertbord":
			positions = [];
			break;
		case "cornbord":
			positions = [];
			break;
		default:
			console.log(`Not block found`);
	}
	return positions;
}
let newBlocks = [];

function pickBlocksToChange(x, blocks, pickedBlock) {
	console.log("1");
	let matrix = {};
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
	];
	// if (x === 0 || x === 10 || x === 66 || x === 76) {
	// 	newBlock = new Block("CornBord", x);
	// } else if (x > 0 && x < 10) {
	// 	newBlock = new Block("HorizBord", x);
	// } else if (x === 38) {
	// 	newBlock = new Block("FW", x);
	// } else if (x % 11 === 0 && x !== 0 && x !== 66) {
	// 	newBlock = new Block("VertBord", x);
	// } else if ((x + 1) % 11 === 0) {
	// 	newBlock = new Block("VertBord", x);
	// } else if (x > 11 && x < 65) {
	// 	newBlock = new Block("Empty", x);
	// } else if (x>66 && x < 76 ) {
	// 	newBlock = new Block("HorizBord", x);
	//console.log(typeof x, x);
	console.log(`x:`, x);
	x = Number(x); //
	if (
		x === 0 ||
		x === 10 ||
		x === 66 ||
		x === 76 ||
		x === 38 ||
		(x > 0 && x < 10) ||
		(x % 11 === 0 && x !== 0 && x !== 66) ||
		x % 11 === 10 ||
		(x > 66 && x < 76)
	) {
		document.getElementById(
			"pickedBlocksDivText"
		).innerHTML = `Block cannot be changed. <br> Pick another block`;
	} else if (x !== 38 && x > 10 && x < 54) {
		if (blocks[x - 1].blockName === "Empty") {
			matrix.a = "both";
			//	console.log(`inside matrix:`,matrix);
		} else {
			matrix.a = blocks[x - 1].properties.c;
			//console.log(`inside matrix:`, matrix);
		}

		if (blocks[x - 11].blockName === "Empty") {
			matrix.b = "both";
		} else {
			matrix.b = blocks[x - 11].properties.d;
		}

		if (blocks[x + 1].blockName === "Empty") {
			matrix.c = "both";
		} else {
			matrix.c = blocks[x + 1].properties.a;
		}

		if (blocks[x + 11].blockName === "Empty") {
			matrix.d = "both";
		} else {
			matrix.d = blocks[x + 11].properties.b;
		}

		//console.log(`matrix: `, matrix);

		newBlocks = matrixMatch1(matrix, blocks1, x, blocks);
	}
	return newBlocks;
}

export {
	pickRandomBlock,
	createStroopWafels,
	createStroops,
	pickBlocksToChange,
	pickBlocks,
};
