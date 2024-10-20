import React from "react";
import { useRef, useEffect, useState } from "react";
import PlayTheme from "./PlayTheme";
import checkStroopWafels from "../checkBlocks/checkStroopWafels";
import PowerPills from "./PowerPills";

function Play({ columnsToKeep, rowsToKeep,stroops }) {
	const ref = useRef();


	const Newgame = () => {
		let disableUp = true;
		let disableDown = true;
		let disableLeft = true;
		let disableRight = true;
		function checkYUp(packyManX, packyManY) {
			columnsToKeep.forEach((col) => {
				packyManX = Number(packyManX);
				if (
					[
						4.5, 14.5, 24.5, 34.5, 44.5, 54.5, 64.5, 74.5, 84.5,
					].includes(packyManX)
				) {
					let ans = Number(col.x) - 2;
					//console.log(packyManX + "," + ans);
					if (ans === packyManX) {
						let yList = col.y;
						//console.log(yList);
						if (yList !== []) {
							for (let yl = 0; yl < yList.length; yl++) {
								//console.log(`yList[${yl}]:`, yList[yl]);
								if (
									yList[yl].start - 2 <= packyManY &&
									yList[yl].end - 2 >= packyManY
								) {
									if (
										packyManY <= yList[yl].end &&
										packyManY > yList[yl].start - 2
									) {
										disableUp = false;
										console.log(`moving up`);
										return;
									} else disableUp = true;
									return;
								}
							}
						}
					}
				}
			});
			return disableUp;
		}

		function checkYDown(packyManX, packyManY) {
			columnsToKeep.forEach((col) => {
				packyManX = Number(packyManX);
				if (
					[
						4.5, 14.5, 24.5, 34.5, 44.5, 54.5, 64.5, 74.5, 84.5,
					].includes(packyManX)
				) {
					let ans = Number(col.x) - 2;
					//console.log(packyManX + "," + ans);
					if (ans === packyManX) {
						//console.log(`packyManX:`, packyManX);
						let yList = col.y;
						//console.log(yList);
						if (yList !== []) {
							for (let yl = 0; yl < yList.length; yl++) {
								if (
									yList[yl].start - 2 <= packyManY &&
									yList[yl].end - 2 > packyManY
								) {
									//	console.log(`yList[${yl}]:`, yList[yl]);
									if (
										packyManY < yList[yl].end - 2 &&
										packyManY >= yList[yl].start - 2
									) {
										disableDown = false;
										//	console.log(`moving down`);
										return;
									} else {
										disableDown = true;
										return;
									}
								} else if (packyManY >= yList[yl].end - 2) {
									disableDown = true;
									//console.log(`no more moving down`);
								}
							}
						}
					}
				}
			});
			return disableDown;
		}
		function checkXLeft(packyManX, packyManY) {
			rowsToKeep.forEach((row) => {
				//console.log(row.y - 2);
				packyManY = Number(packyManY);
				if ([4.5, 14.5, 24.5, 34.5, 44.5, 54.5].includes(packyManY)) {
					let ans = Number(row.y - 2); //adjust for placement of stroopwafels
					if (ans === Number(packyManY)) {
						//console.log(`match!!!`);
						let xList = row.x;
						//console.log(`xList: `, xList);
						if (xList !== []) {
							for (let xl = 0; xl < xList.length; xl++) {
								//console.log(`xList[${xl}]:`, xList[xl]);
								if (
									packyManX <= xList[xl].end - 2 &&
									packyManX > xList[xl].start - 2
								) {
									disableLeft = false;
									//console.log(`moving left`);
									return;
								} else disableLeft = true;
							}
						}
					}
				} else disableLeft = true;
			});
			//console.log(`disableLeft`, disableLeft);
			return disableLeft;
		}

		function checkXRight(packyManX, packyManY) {
			rowsToKeep.forEach((row) => {
				//console.log(row.y - 2);
				packyManY = Number(packyManY);
				if ([4.5, 14.5, 24.5, 34.5, 44.5, 54.5].includes(packyManY)) {
					let ans = Number(row.y - 2); //adjust for placement of stroopwafels
					if (ans === Number(packyManY)) {
						//console.log(`match!!!`);
						let xList = row.x;
						if (xList !== []) {
							for (let xl = 0; xl < xList.length; xl++) {
								//console.log(`xList[${xl}]:`, xList[xl]);
								if (
									packyManX >= xList[xl].start - 2 &&
									packyManX < xList[xl].end - 2
								) {
									disableRight = false;
									//console.log(`moving right`);
									return;
								} else disableRight = true;
							}
						}
					}
				} else disableRight = true;
			});
			//console.log(disableRight);
			return disableRight;
		}

		//console.log(JSON.stringify(blocks));
		function useKey(key, cb) {
			const callbackRef = useRef(cb);

			useEffect(() => {
				callbackRef.current = cb;
			});

			useEffect(() => {
				function handle(event) {
					if (event.code === key) {
						callbackRef.current(event);
					}
				}
				document.addEventListener("keydown", handle);
				return () => document.removeEventListener("keydown", handle);
			}, [key]);
		}
		//create hooks

		function handleUp() {
			document.getElementById("packy").setAttribute("class", "packy");
			let packyman = document.getElementById("packy");
			let packyManY = packyman.offsetTop / 16;
			let packyManX = packyman.offsetLeft / 16;
			//	console.log(`X:`, packyManX);
			//console.log(`checkY `, checkYUp(packyManX, packyManY));
			let disableUp = checkYUp(packyManX, packyManY);

			if (disableUp === false) {
				document.getElementById("packy").classList.add("up", "open");

				//0.5 controls speed//
				document.getElementById("packy").style.top =
					(packyman.offsetTop / 16 - 0.5).toString() + "rem";
				times++;

				if (times % 4 === 0) {
					settime();
					document.getElementById("packy").classList.add("closed");
				} else {
					document.getElementById("packy").classList.remove("closed");
					document.getElementById("packy").classList.add("open");
				}
			}
			checkStroopWafels();
		}
		function handleDown() {
			document.getElementById("packy").setAttribute("class", "packy");
			let packyman = document.getElementById("packy");
			let packyManY = packyman.offsetTop / 16;
			let packyManX = packyman.offsetLeft / 16;
			let disableDown = checkYDown(packyManX, packyManY);
			//console.log(`disdown: `, disableDown);
			if (disableDown === false) {
				document.getElementById("packy").classList.add("down", "open");
				document.getElementById("packy").style.top =
					(packyman.offsetTop / 16 + 0.5).toString() + "rem";
				times++;
				if (times % 4 === 0) {
					settime();
					document.getElementById("packy").classList.add("closed");
				} else {
					document.getElementById("packy").classList.remove("closed");
					document.getElementById("packy").classList.add("open");
				}
			}
			checkStroopWafels();
		}
		function handleLeft() {
			document.getElementById("packy").setAttribute("class", "packy");
			let packyman = document.getElementById("packy");
			let packyManY = packyman.offsetTop / 16;

			let packyManX = packyman.offsetLeft / 16;
			let disableLeft = checkXLeft(packyManX, packyManY);

			if (disableLeft === false) {
				document.getElementById("packy").classList.add("left", "open");
				document.getElementById("packy").style.left =
					(packyman.offsetLeft / 16 - 0.5).toString() + "rem";
				times++;
				//console.log(`XLeft:`, packyman.offsetLeft / 16);
				//console.log(`yTop: `, packyman.offsetTop / 16);
				if (times % 4 === 0) {
					settime();
					document.getElementById("packy").classList.add("closed");
				} else {
					document.getElementById("packy").classList.remove("closed");
					document.getElementById("packy").classList.add("open");
				}
			}
			checkStroopWafels();
		}
		let times = 1;
		function handleRight() {
			
			document.getElementById("packy").setAttribute("class", "packy");
			let packyman = document.getElementById("packy");
			let packyManY = packyman.offsetTop / 16;

			let packyManX = packyman.offsetLeft / 16;
			let disableRight = checkXRight(packyManX, packyManY);

			if (disableRight === false) {
				document.getElementById("packy").classList.add("right", "open");
				document.getElementById("packy").style.left =
					(packyman.offsetLeft / 16 + 0.5).toString() + "rem";
				times++;
				if (times % 4 === 0) {
					settime();
					document
						.getElementById("packy")
						.classList.add("right", "closed");
				} else {
					document.getElementById("packy").classList.remove("closed");
					document.getElementById("packy").classList.add("open");
				}
			}
			checkStroopWafels();
		}

		function settime() {
			var audio = document.getElementById("movingpacman");
			audio.currentTime = 0.575;
			audio.play();

			// this is to check the currentTime in the console log
		}

		// function stopTheme() {
		// 	var audio1 = document.getElementById("audioTheme");
		// 	audio1.pause();
		// }

		
		useKey("Numpad4", handleLeft);
		useKey("Numpad8", handleUp);
		useKey("Numpad6", handleRight);
		useKey("Numpad2", handleDown);
	};
	/**************score keeping**************/
	function add10ToCount(count) {
		count += 10;
		return count;
	}


	Newgame();

	return (
		<div>
			{/* <PowerPills stroops={stroops}/> */}
			<PlayTheme />
		</div>
	);
}

export default Play;
