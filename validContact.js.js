const validContact = (number) => {
	if (typeof number !== "string") {
		return "Invalid";
	}
	if (!(number[0] === "0" && number[1] === "1")) {
		return false;
	}
	var length = 0;
	for (let i in number) {
		length++;
	}
	if (length !== 11) {
		return false;
	}
	for (let i = 0; i < length; i++) {
		if (number[i] === " ") {
			return false;
		}
	}
	return true;
};
