function calculateSleepTime(times) {
	for (let i = 0; i < times.length; i++) {
		if (typeof times[i] !== "number") {
			return "Invalid";
		}
	}

	let totalSeconds = 0;
	for (let i = 0; i < times.length; i++) {
		totalSeconds = totalSeconds + times[i];
	}

	let hours = 0;
	while (totalSeconds >= 3600) {
		hours = hours + 1;
		totalSeconds = totalSeconds - 3600;
	}

	let minutes = 0;
	while (totalSeconds >= 60) {
		minutes = minutes + 1;
		totalSeconds = totalSeconds - 60;
	}

	let seconds = totalSeconds;

	return {
		hour: hours,
		minute: minutes,
		second: seconds,
	};
}
