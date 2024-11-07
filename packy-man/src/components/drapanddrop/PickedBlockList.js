import React from "react";
import ListBlock from "../ListBlock";


function PickedBlockList({ listBlocks, blocks }) {
	
console.log("PickedBlockList:",listBlocks);

	return (
	 
			<div className="blocklist">
				<ListBlock
					listBlocks={listBlocks}
					blocks={blocks}
					
				/>
			</div>
			 
		 
	);
}

export default PickedBlockList;
