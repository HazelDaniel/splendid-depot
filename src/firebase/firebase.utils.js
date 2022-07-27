// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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





