export const FormatErrorArray = (errorsArray: Array<string>) => {
	let x: string = ``;
	if (errorsArray.length < 1) {
		return "Something went wrong!!";
	}
	if (errorsArray.length == 1) {
		return errorsArray[0];
	}
	for (let i = 0; i < errorsArray.length; i++) {
		const item = errorsArray[i];
		if (x.length > 0) {
			x = x + "\n" + `* ${item}`;
		} else {
			x = `${item}`;
		}
	}
	return x;
};
