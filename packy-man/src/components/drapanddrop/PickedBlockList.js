import React from "react";
import FW from "../FW";
import LBC from "../LBC";
import BlockSV from "../BlockSV";
import BlockSH from "../BlockSH";
import Empty from "../Empty";
import RBC from "../RBC";
import RTC from "../RTC";
import TopT from "../TopT";
import BotT from "../BotT";
import LTC from "../LTC";
import LeftT from "../LeftT";
import RightT from "../RightT";
import BottDE from "../BottDE";
import TopDE from "../TopDE";
import LeftDE from "../LeftDE";
import RightDE from "../RightDE";
import ListBlock from "../ListBlock";
import VerifyPickedBlock from "../../checkBlocks/VerifyPickedBlock";
import { pickBlocks } from "../../checkBlocks/pickRandomBlock";
import ListOfBlocksContext from "../../context/ListOfBlocksContext";

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
