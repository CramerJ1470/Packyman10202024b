import React from "react";
import "../index.css";
import LTOC from "./LTOC";
 
import RTOC from "./RTOC";
 

const TopOpen = () => {
	return (
		<>
			<div>
                    <LTOC />
					<RTOC/>
			</div>
			
		</>
	);
};

export default TopOpen;