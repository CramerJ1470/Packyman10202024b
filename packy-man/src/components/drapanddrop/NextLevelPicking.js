import React from "react";

function NextLevelPicking({Block, pickedBlockName}) {
	function changeToPicked(e) {
		//console.log(`pickedBlock to deploy:`, e.target);
		// e.target.classList.add("whitebg");
		// let allBlocks = document.getElementsByClassName("block");
       // console.log(`allblocks: `,allBlocks);
		console.log(localStorage.getItem("pickedBlockName").toLowerCase());
		// allBlocks[localStorage.getItem("blocktochange")]= e.target;
		// console.log(`pickedBlockName:`,pickedBlockName);
		let allBlocks1 = localStorage.getItem("Blocks");
		allBlocks1[Number[localStorage.getItem("pickedBlockIndex")]] = new Block(localStorage.getItem("PickedBlockName").toLowerCase(),Number[localStorage.getItem("pickedBlockIndex")]);
		localStorage.setItem("Blocks", allBlocks1);
		console.log(`blocks after change: `,localStorage.getItem("Blocks"));
	}

	let potentialPicks = document.getElementsByClassName("listed");
	console.log(potentialPicks);
	for (let v = 0; v < potentialPicks.length; v++) {
		potentialPicks[v].addEventListener("click", changeToPicked);
	}

	return <div></div>;
}

export default NextLevelPicking;
