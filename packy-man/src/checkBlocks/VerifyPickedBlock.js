let matrix;
function VerifyPickedBlock(blocks, index) {
	let list = Array.from(blocks);
	let type = list[index].getAttribute("name").toLowerCase();
	console.log(`type: `, type);
	const requiredMatrix = getMatrix(type);
	console.log(requiredMatrix);
	verifyEachSide(list, index, requiredMatrix, type);
}
function verifyEachSide(list, index, requiredMatrix, type) {
    console.log(`index:`,index);
	let left = getMatrix(
		list[Number(index) - 1].getAttribute("name").toLowerCase()
	).c;
	console.log(`left: `, left);
	let top = getMatrix(
		list[Number(index) - 11].getAttribute("name").toLowerCase()
	).d;
	console.log(`top:`, top);
	console.log(list);
	let right = getMatrix(
		list[Number(index) + 1].getAttribute("name").toLowerCase()
	).a;
	console.log(`right: `, right);
	let bottom = getMatrix(
		list[Number(index) + 11].getAttribute("name").toLowerCase()
	).b;
	console.log(bottom);
	let actualMatrix = { a: left, b: top, c: right, d: bottom };
	console.log(`actualMatrix:`, actualMatrix);
	if (requiredMatrix === actualMatrix) {
		let matchType = "direct";
		return matchType;
	} else if (type === "empty") {
		let matchType = "both";
		return matchType;
	} else {
		let matchType = false;
		return matchType;
	}
}
function getMatrix(type) {
	let properties;
	switch (type) {
		case "bott":
			properties = {
				a: "open",
				b: "closed",
				c: "open",
				d: "open",
			};
			break;
		case "ltc":
			properties = {
				a: "closed",
				b: "closed",
				c: "open",
				d: "open",
			};
			break;
		case "fw":
			properties = {
				a: "open",
				b: "open",
				c: "open",
				d: "open",
			};
			break;
		case "lbc":
			properties = {
				a: "closed",
				b: "open",
				c: "open",
				d: "closed",
			};
			break;
		case "blocksv":
			properties = {
				a: "closed",
				b: "open",
				c: "closed",
				d: "open",
			};
			break;
		case "blocksh":
			properties = {
				a: "open",
				b: "closed",
				c: "open",
				d: "closed",
			};
			break;
		case "empty":
			properties = {
				a: "both",
				b: "both",
				c: "both",
				d: "both",
			};
			break;
		case "rbc":
			properties = {
				a: "open",
				b: "open",
				c: "closed",
				d: "closed",
			};
			break;
		case "rtc":
			properties = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "open",
			};
			break;
		case "topt":
			properties = {
				a: "open",
				b: "open",
				c: "open",
				d: "closed",
			};
			break;
		case "leftt":
			properties = {
				a: "closed",
				b: "open",
				c: "open",
				d: "open",
			};
			break;
		case "rightt":
			properties = {
				a: "open",
				b: "open",
				c: "closed",
				d: "open",
			};
			break;
		case "topde":
			properties = {
				a: "closed",
				b: "open",
				c: "closed",
				d: "closed",
			};
			break;
		case "rightde":
			properties = {
				a: "closed",
				b: "closed",
				c: "open",
				d: "closed",
			};
			break;
		case "bottde":
			properties = {
				a: "closed",
				b: "closed",
				c: "closed",
				d: "open",
			};
			break;
		case "leftde":
			properties = {
				a: "open",
				b: "closed",
				c: "closed",
				d: "closed",
			};
			break;
		case "horizbord":
			properties = {
				a: "closed",
				b: "closed",
				c: "closed",
				d: "closed",
			};
			break;
		case "vertbord":
			properties = {
				a: "closed",
				b: "closed",
				c: "closed",
				d: "closed",
			};
			break;
		case "cornbord":
			properties = {
				a: "closed",
				b: "closed",
				c: "closed",
				d: "closed",
			};
			break;

		default:
			console.log(`Not block found`);
	}
	return properties;
}

export default VerifyPickedBlock;
