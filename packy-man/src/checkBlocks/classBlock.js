class Block {
	constructor(block, x) {
		this.blockName = block;
		this.properties = (() => {
			let type = block.toLowerCase();
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
						a: "closed",
						b: "closed",
						c: "closed",
						d: "closed",
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
		})();
		this.type = this.blockName.toLowerCase();
		this.yCenter = -3.5 + Math.floor(x / 11) * 10;
		this.xCenter = -3.5 + (x % 11) * 10;
		this.x = x;
	}
}


