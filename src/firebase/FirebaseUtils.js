import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCbQxJGStjlIcnZ35rlft2NyBZTLVis_A",
    authDomain: "cwrn-db.firebaseapp.com",
    databaseURL: "https://cwrn-db.firebaseio.com",
    projectId: "cwrn-db",
    storageBucket: "cwrn-db.appspot.com",
    messagingSenderId: "337583205970",
    appId: "1:337583205970:web:b25aeddb6cfe21e54df98b",
    measurementId: "G-G594B563JD"
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
