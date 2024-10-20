import React from "react";
import Row from "./Row";

const Board = ({rows}) => {
	
  console.log(`board rows: `,rows.rows);


	return (
		<>
    <div >
			{rows.rows.map((row) => {
				return <Row row={row}/>;
			})}
	
      </div>
		</>
	);
}

export default Board;
