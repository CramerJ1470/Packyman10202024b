function checkStroopWafels() {
	let divPacky = document.getElementById("packy");
	let packyX = divPacky.offsetLeft;
	let packyY = divPacky.offsetTop;

	let divStroop = document.getElementsByClassName("wafels");
	console.log(`offest:`, divStroop[1].offsetLeft);
	let score = document.getElementById("count");

	for (var i = 0; i < divStroop.length; i++) {
		let stroopX = divStroop[i].offsetLeft - 32;
		let stroopY = divStroop[i].offsetTop - 32;

		if (packyX === stroopX && packyY === stroopY) {
			console.log(`packyX:`, packyX);
			console.log("stroopX: ", stroopX);
			document.getElementById("count").innerText =
				Number(score.innerText) + 10;
			console.log(`matchX!!!!`);
			divStroop[i].classList.add("eaten");
		}
	}
}
export default checkStroopWafels;
