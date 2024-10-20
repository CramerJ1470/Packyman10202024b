import React, { useContext } from "react";
import Eachone2 from "./Eachone2";

import FW from "./FW";
import LBC from "./LBC";
import BlockSV from "./BlockSV";
import BlockSH from "./BlockSH";
import Empty from "./Empty";
import RBC from "./RBC";
import RTC from "./RTC";
import TopT from "./TopT";
import BotT from "./BotT";
import LTC from "./LTC";
import LeftT from "./LeftT";
import RightT from "./RightT";
import BottDE from "./BottDE";
import TopDE from "./TopDE";
import LeftDE from "./LeftDE";
import RightDE from "./RightDE";
import HorizBord from "./HorizBord";
import VertBord from "./VertBord";
import CornBord from "./CornBord";
import Unchosen from "./Unchosen";
import ListOfBlocksContext from "../context/ListOfBlocksContext";

function ListItems( listitems ) {
	console.log("ListItems listitems:",listitems);
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
							a: "",
							b: "",
							c: "",
							d: "",
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
							a: "open",
							b: "closed",
							c: "closed",
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
							a: "closed",
							b: "closed",
							c: "open",
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
					case "unchosen":
						properties = {
							a: "both",
							b: "both",
							c: "both",
							d: "both",
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
	let blocksToUse = [];

	if ( listitems === null) {
		listitems = [
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
			"TopDE",
		"BottDE",
		"RightDE",
		"LeftDE",
		];
		
		console.log(listitems);
	} else {
		
	
			listitems = [
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
				"TopDE",
				"BottDE",
				"RightDE",
				"LeftDE",
			];
			console.log(listitems);
		 console.log(`after split:`, listitems);
		 blocksToUse = listitems.map((p) => {
		 	return new Block(p);
		  });
		  console.log("new blocksToUse: ",blocksToUse);

	}
	function pickthis(e) {
		// let blockArray = document.getElementsByClassName("block");
		console.log(`e: `, e.target);
		let indexofPick = Number(localStorage.getItem("pickedBlockIndex"));
		let listB = document.getElementsByClassName("block");
		console.log();

		//let change1 = listB[Number(localStorage.getItem("pickedBlockIndex"))];
		console.log(`changeOuter:`, listB[indexofPick].outerHTML);
		console.log(`e Outer:`, e.target.parentNode.outerHTML);
		console.log(e.target.getAttribute("name"));
		//let new1 = getHTML(e.target.getAttribute("name"), indexofPick);
		let newOuter = `<div id=${indexofPick}>`+e.target.outerHTML+`</div>`;
		listB[indexofPick].parentNode.parentNode.outerHTML = newOuter;
		console.log(listB[indexofPick]);
		
		
	}
let ind = localStorage.getItem("pickedBlockIndex");
	return (
		<>
		<div>
			{blocksToUse.map((block) => {
				return (
					
					<button onClick={pickthis} className="listed">
						<Eachone2 block={block} index={ind} />
					</button>
					
				);
			})}
		</div>
		</>
	);
}

export default ListItems;
