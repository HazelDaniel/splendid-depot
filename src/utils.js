export const publicUrl = process.env.PUBLIC_URL;

// ASYNC LOGICS 
export const wait = seconds => {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(seconds);
		},seconds * 1000)
	})
}
