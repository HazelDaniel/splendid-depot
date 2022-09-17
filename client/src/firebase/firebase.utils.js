import {getDoc,setDoc} from "firebase/firestore";
import {onAuthStateChanged,getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {default as keys} from "../keys";
import {doc, onSnapshot,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: keys.FIREBASE_API_KEY,
	authDomain: "splendid-depot-2.firebaseapp.com",
	projectId: "splendid-depot-2",
	storageBucket: "splendid-depot-2.appspot.com",
	messagingSenderId: "938592111014",
	appId: "1:938592111014:web:2d3f2eac56ca5ec0b8a767",
	measurementId: "G-Q1V2L6GGD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);

export const projectId = "splendid-depot-2";



export const  auth = getAuth();




export const createUserProfileDocument =  async (userAuth,AdditionalData)=>{
	const userRef = await doc(DB,userAuth.uid);
	const userSnapshot = await getDoc(userRef);
	if(!( userSnapshot).exists()){
		console.log(userSnapshot.data());
		const userDetails = {
			createdAt: new Date().getTime(),
			email: userAuth.email,
			...AdditionalData
		}
		console.log(userDetails);
		await setDoc(userRef,userDetails);
		return userRef;
	}
	
}


export const getCollectionsMap = ()=>{

}

export const checkLastAuthSession = ()=>{
	return new Promise((res,rej)=>{
		const checkAuth = onAuthStateChanged(auth,(user)=>{
			if(user?.uid) {
				res(user);
			}
			else {
				rej(null);
			}
		})
		checkAuth();
	})
}