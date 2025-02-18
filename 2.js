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
