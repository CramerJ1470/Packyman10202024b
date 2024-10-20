function getPillLocations(block, x) {
	let pillLocs = block.positions;
	let stroopwafels = [];

	let horizEls = Object.entries(pillLocs.horiz);
	horizEls.forEach((location) => {
		let wafel = {};
		wafel.type = location[0];
		wafel.location = location[1];
		stroopwafels.push(wafel);
	});

	let vertEls = Object.entries(pillLocs.vert);
	vertEls.forEach((location) => {
		let wafel = {};
		wafel.type = location[0];
		wafel.location = location[1];
		stroopwafels.push(wafel);
	});

	return stroopwafels;
}

export default getPillLocations;
