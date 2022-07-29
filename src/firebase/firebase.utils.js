// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,doc,setDoc,getDoc,collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB1zLOdkpJd6I1nir2tNNmWCXQ1vBDvTuA",
	authDomain: "splendid-depot.firebaseapp.com",
	projectId: "splendid-depot",
	storageBucket: "splendid-depot.appspot.com",
	messagingSenderId: "105443314639",
	appId: "1:105443314639:web:44b2aaee93a4c1af9660ba",
	measurementId: "G-X11L4YWNTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

const DB = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// console.log(userAuth);
	if (!userAuth) return;
	const docRef = doc(DB, "users", userAuth.uid);
	const docSnapshot = await getDoc(docRef);
	// console.log(docSnapshot.id,userAuth.uid);

	if (!docSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date().getTime();
		try {
			await setDoc(docRef, {
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("failed to create user details ", error.message);
		}
	}

	return docRef;


	// console.log(ref)
	// const refRes = await getDoc(ref);
	// console.log(refRes.data())
	// const res = await DB;
}




