function calculateVAT(price) {
	if (typeof price !== "number" || price <= 0) {
		return "Invalid";
	}
	return (price * 7.5) / 100;
}

function validContact(contact) {
	if (typeof contact !== "string") {
		return "Invalid";
	}
	if (!(contact[0] === "0" && contact[1] === "1")) {
		return false;
	}
	var length = 0;
	for (let i in contact) {
		length++;
	}
	if (length !== 11) {
		return false;
	}
	for (let i = 0; i < length; i++) {
		if (contact[i] === " ") {
			return false;
		}
	}
	return true;
}

function willSuccess(marks) {
	if (!Array.isArray(marks)) {
		return "Invalid";
	}

	let passCount = 0;
	let failCount = 0;

	for (var mark of marks) {
		if (mark >= 50) {
			passCount++;
		} else {
			failCount++;
		}
	}

	return passCount > failCount;
}

function validProposal(person1, person2) {
	if (typeof person1 !== "object" || typeof person2 !== "object") {
		return "Invalid";
	}
	if (person1.gender === person2.gender) {
		return false;
	}
	return Math.abs(person1.age - person2.age) <= 7;
}

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
