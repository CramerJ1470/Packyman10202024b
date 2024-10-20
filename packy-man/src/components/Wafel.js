import React from "react";
import { useContext } from "react";
import "../index.css";
import ScoreContext from "../context/ScoreContext";

const Wafel = ({ wafel,index}) => {
	
	let id = "wafel"+index.toString();
	//console.log(`wafel ${id}:`,wafel);
	
	
	return (
	
		<i style={{"top": wafel.y, "left":wafel.x}} id={id} className="fa-solid fa-stroopwafel"></i>
		
	  
			
		 
		 
	);
    
};

export default Wafel;