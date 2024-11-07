import React from "react";
import { useNavigate} from "react-router-dom";

import { logout } from "../services";

function RegisteredStart({isAuth, boards}) {
	const navigate = useNavigate();
	if (!isAuth) {
		navigate("/");
	}

	const { username, id } = JSON.parse(localStorage.userData);

	const userId = id;

	const logoutHandler = async (e, isAuth) => {
		e.preventDefault();
		const res = await logout();
		window.location.reload(false);
		logout();
		loggedout();
	};

	function loggedout() {
		navigate("/home");
	}

	const playrandomBoard = (e) => {
		e.preventDefault();
		navigate("/playingboard");
	};

	const buildboard = (e) => {
		e.preventDefault();
		navigate("/buildboard");
	};

	const savedboardsview = () => {
		navigate(`/savedboards`);
	};
	return (
		<div className="regorstart home1" id="regorstart">
			<div id="welcome">
				<div className="btn">Welcome! {username}</div>
			</div>
			<div id="randomboard">
				<button className="btn" onClick={playrandomBoard}>
					Play a Random Game Board
				</button>
			</div>
			<div id="savedboards">
			{/* <Link to = "saveboards" path="../savedborards" isAuth= {isAuth} boards={boards}> 
			Play a Saved Game Board
				</Link> */}
				<button className="btn" key={userId} onClick={savedboardsview}>
					Play a Saved Game Board
				</button>
			</div>
			<div id="buildboard">
				<button className="btn" onClick={buildboard}>
					Build a Board
				</button>
			</div>
			<div id="logout">
				<button className="btn" onClick={logoutHandler}>
					Logout
				</button>
			</div>
		</div>
	);
}

export default RegisteredStart;
