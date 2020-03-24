import firebase from "firebase"
// Required for side-effects
import "firebase/firestore"

firebase.initializeApp({
	apiKey: "AIzaSyBUfDVWkM9U2RJfvbPlnygx_E2s35BSJZw",
	authDomain: "bounapp-9d455.firebaseapp.com",
	databaseURL: "https://bounapp-9d455.firebaseio.com",
	projectId: "bounapp-9d455",
	storageBucket: "bounapp-9d455.appspot.com",
	messagingSenderId: "939487732404",
	appId: "1:939487732404:web:9ff65dd96d9d79fdf16de1"
})
console.log("firebase initialize edildi")

export default firebase
