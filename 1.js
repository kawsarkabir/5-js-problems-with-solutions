function calculateVAT(price) {
	if (typeof price !== "number" || price <= 0) {
		return "Invalid";
	}
	return (price * 7.5) / 100;
}
