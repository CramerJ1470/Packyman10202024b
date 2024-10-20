import React, { Component } from "react";
const pacmanBeginning = require("../assets/pacman_beginning.wav");

const PlayTheme = () => {
	function playtheme() {
		const audioEl = document.getElementById("audiotheme");
		audioEl.play();
	}
	// window.onload = (function () {
	// 	playtheme();
	// })();

	return (
		<>
			<div className="player"></div>
		</>
	);
};

export default PlayTheme;
