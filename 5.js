function calculateSleepTime(sleepSeconds) {
	// Check if input is array
	if (!sleepSeconds || sleepSeconds.length === undefined) {
		return "Invalid";
	}

	// Check if array is empty
	if (sleepSeconds.length === 0) {
		return "Invalid";
	}

	// Check if all elements are numbers
	for (let i = 0; i < sleepSeconds.length; i++) {
		if (typeof sleepSeconds[i] !== "number") {
			return "Invalid";
		}
	}

	// Calculate total seconds
	let totalSeconds = 0;
	for (let i = 0; i < sleepSeconds.length; i++) {
		totalSeconds = totalSeconds + sleepSeconds[i];
	}

	// Convert to hours
	let hours = 0;
	while (totalSeconds >= 3600) {
		hours = hours + 1;
		totalSeconds = totalSeconds - 3600;
	}

	// Convert remaining seconds to minutes
	let minutes = 0;
	while (totalSeconds >= 60) {
		minutes = minutes + 1;
		totalSeconds = totalSeconds - 60;
	}

	// Remaining seconds
	let seconds = totalSeconds;

	// Return the result object
	return {
		hour: hours,
		minute: minutes,
		second: seconds,
	};
}
console.log(calculateSleepTime([1000, 499, 519, 300]));