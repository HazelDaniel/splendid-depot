export const publicUrl = process.env.PUBLIC_URL;

// ASYNC LOGICS
export const wait = (seconds) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(seconds);
		}, seconds * 1000);
	});
};

export const reformUserObject = (data) => {
	const modifiedData = Object.fromEntries(
		Object.entries(data)
			.map(([key, value]) => {
				return [key, value[value.stringValue ? "stringValue" : value.integerValue ? "integerValue" : value.arrayValue ? "arrayValue" : "null"]];
			})
			.map(([key, value]) => {
				const valueChecked = !!+value ? +value : value;
				return [key, valueChecked];
			})
	);
	return modifiedData;
};
