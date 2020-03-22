import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyDIZ9uw_1sKEMYXaIE6bIfGAO0OF2FQfxc",
	authDomain: "crwn-db-f994d.firebaseapp.com",
	databaseURL: "https://crwn-db-f994d.firebaseio.com",
	projectId: "crwn-db-f994d",
	storageBucket: "crwn-db-f994d.appspot.com",
	messagingSenderId: "323517451758",
	appId: "1:323517451758:web:a91e2f7639c431329c92ff"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	console.log(snapShot);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,

				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
