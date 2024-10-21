import React, { useContext } from "react";
import SavedBoards from "./SavedBoards";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import BoardsContext from "../context/BoardsContext";

const GetSavedBoards = () => {
	const { setIsAuth, isAuth } = useContext(AuthContext);
	const { setBoards, boards } = useContext(BoardsContext);
// function GetSavedBoards({ isAuth, boards }) {
	

	const navigate = useNavigate();
	function backhomeHandler(userId) {
		navigate("/home1");
	}
	//console.log(`getsavedboards boards: `, boards);
	const { username, id } = JSON.parse(localStorage.userData);
	let filteredboards = boards.filter((board) => board.userId === id);
	//console.log(filteredboards);
	if (filteredboards.length > 0) {
	return (
		<>
		<div className="titlebox">
			<p className="PageTitle">Pick a Board to Play!</p>
			
				
				
		</div>	
		<button
						className="btn"
						onClick={(event) => backhomeHandler()}
					>
						Back to Home
					</button>
			<div className="cardsforboards">
				{filteredboards.map((board, index) => {
					return (
						<div className="cards1"><SavedBoards board={board} index={index} key={index} /></div>
					);
				})}
			</div>
			
				
				
		</>
	);
			}
			else {
				return (
					<>
 
					<h1>You have no saved boards</h1>
			 
		</>
				);

			}
}

export default GetSavedBoards;
