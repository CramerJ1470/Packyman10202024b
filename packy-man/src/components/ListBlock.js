import React from "react";
import { useContext } from "react";
import ListItems from "./ListItems";

import ListOfBlocksContext from "../context/ListOfBlocksContext";

function ListBlock({ listBlocks, blocks }) {
	const { setListOfBlocks, listOfBlocks } = useContext(ListOfBlocksContext);
	
	 listBlocks = localStorage.getItem("listitems");
	 setListOfBlocks(listBlocks);
	

	console.log(`blocks:`, blocks);

	// const { setListOfBlocks, listOfBlocks } = useContext(ListOfBlocksContext);

	let indexofPick = Number(localStorage.getItem("pickedBlockIndex"));
	console.log(localStorage);
	console.log(`iop::`, indexofPick);

	//  let listitems = getListItems(pickedMatrix);
	// console.log(`listitems:`, listitems);

	return (
		<div>
			<ListItems listitems={listOfBlocks} blocks={blocks}/>
		</div>
	);
}

export default ListBlock;
