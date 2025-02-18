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
