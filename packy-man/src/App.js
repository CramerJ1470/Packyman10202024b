import "./App.css";
import "./index.css";
import PlayingBoard from "./components/PlayingBoard";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import BoardsContext from "./context/BoardsContext";
import ListOfBlocksContext from "./context/ListOfBlocksContext";
import BuildRowsContext from "./context/BuildRowsContext";
import Home from "./components/Home";
import Home1 from "./components/Home1";
import GuestPlayingBoard from "./components/GuestPlayingBoard";
import PlayPickedBoard from "./components/PlayPickedBoard";
import { getSavedBoards, getScore ,getListItems1} from "./services";
import GetSavedBoards from "./components/GetSavedBoards";
import DragAndDrop from "./components/drapanddrop/DragAndDrop";
import ListItemsContext from "./context/ListItemsContext";

function App() {
	const [isAuth, setIsAuth] = useState();
	const [listOfBlocks, setListOfBlocks] = useState();
	const [buildRows, setBuildRows] = useState([]);
	const [boards, setBoards] = useState([]);
	const [listItems1,setListItems1] = useState([]);

	useEffect(() => {
		getSavedBoards(setBoards);
	}, []);

	const updateBoards = () => {
		getSavedBoards(setBoards);
	};

	useEffect(() => {
		getListItems1(setListItems1);
	}, []);

	const updateListItems1 = () => {
		getListItems1(setListItems1);
	};


	
	console.log("appjs boards length:",boards.length);

	// const [score, setScore] = useState([]);

	// useEffect(() => {
	// 	getScore(setScore);
	// }, []);

	// const updateScore= () => {
	// 	getScore(setScore);
	// };

	return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
			<ListOfBlocksContext.Provider
				value={{ listOfBlocks: listOfBlocks, setListOfBlocks }}
			>
				<BuildRowsContext.Provider
					value={{
						buildRows: buildRows,
						setBuildRows,
					}}
				>
					<BoardsContext.Provider
						value={{
							boards: boards,
							setBoards,
							updateBoards,
						}}
					>
							<ListItemsContext.Provider
						value={{
							listItems1: listItems1,
							setListItems1,
							updateListItems1,
							
						}}>
						{/* <ScoreContext.Provider
					value={{
						score:score,
						setScore,
						updateScore,
					}}> */}
						<div className="App" id="App">
							<Routes>
								<Route
									path="/"
									element={<Home isAuth={isAuth} />}
								/>

								{!isAuth ? (
									<>
										<Route
											path="/guestplayingboard"
											element={<GuestPlayingBoard />}
										/>
										<Route
											path="/home1"
											element={<Home isAuth={isAuth} />}
										/>
										{/* <Route
											path="/buildboard"
											element={
												<DragAndDrop
													 
													listOfBlocks={listOfBlocks}
													buildRows={buildRows}
												/>
											}
										/> */}
									</>
								) : (
									<>
										<Route
											path="/home1"
											element={<Home1 isAuth={isAuth} boards={boards} />}
										/>
										<Route
											path="/playingboard"
											element={
												<PlayingBoard isAuth={isAuth} boards={boards} />
											}
										/>
										<Route
											path="/savedboards"
											element={
												<GetSavedBoards
													isAuth={isAuth}
													boards={boards}
												/>
											}
										/>
										<Route
											path="/playpickedboard/:id"
											element={
												<PlayPickedBoard
													isAuth={isAuth}
													boards={boards}
												/>
											}
										/>
										<Route
											path="/buildboard"
											element={
												<DragAndDrop
													isAuth={isAuth}
													listOfBlocks={listOfBlocks}
													buildRows={buildRows}
													listitems = {listItems1}
													boards={boards}
												
												/>
											}
										/>
										
											{/* <Route
											path="/buildboard"
											element={
												<DragAndDrop
													isAuth={isAuth}
												
												/>
											}
										/> */}
									</>
								)}
							</Routes>
						</div>
						{/* </ScoreContext.Provider> */}
						</ListItemsContext.Provider>
					</BoardsContext.Provider>
				</BuildRowsContext.Provider>
			</ListOfBlocksContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;