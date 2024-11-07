import React, { useContext, useEffect } from "react";
import SavedBoards from "./SavedBoards";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import BoardsContext from "../context/BoardsContext";
import { getSavedBoards } from "../services";

const GetSavedBoards = () => {
	const { setIsAuth, isAuth } = useContext(AuthContext);
	const { setBoards, boards } = useContext(BoardsContext);

	useEffect(() => {
		getSavedBoards(setBoards);
		// Code here will run just like componentDidMount
	  }, [])

	
	
	console.log(`*******************${isAuth}*****************`);

	const navigate = useNavigate();
	function backhomeHandler(userId) {
		navigate("/home1");
	}
	console.log(`getsavedboards boards length: `, boards.length);
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
						<div className="cards1"><SavedBoards isAuth = {isAuth} board={board} index={index} key={index} /></div>
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
