import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDh7v7WQJxmXTOZBtBnLkQSSzuSNaeOLjU",
    authDomain: "crwn-clothing-3faef.firebaseapp.com",
    databaseURL: "https://crwn-clothing-3faef.firebaseio.com",
    projectId: "crwn-clothing-3faef",
    storageBucket: "crwn-clothing-3faef.appspot.com",
    messagingSenderId: "814500386946",
    appId: "1:814500386946:web:ea68a4d017267d78033c9b",
    measurementId: "G-S2D2ZT62T0"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        } catch(e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
