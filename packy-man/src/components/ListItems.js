import React from "react";
import Eachone2 from "./Eachone2";
import Block from "../scripts/Block";

function ListItems( {listitems,blocks} ) {
	console.log("ListItems listitems:",listitems);
	
	
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
