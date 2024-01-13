// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBGWnKJIaI8NOHAiexk-2BbsAnHhl2xu5Y',
	authDomain: 'webrtcl.firebaseapp.com',
	projectId: 'webrtcl',
	storageBucket: 'webrtcl.appspot.com',
	messagingSenderId: '258112004014',
	appId: '1:258112004014:web:4808b7190ae68ff60ab23f',
	measurementId: 'G-4NYM39D1FB'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// If the app is not available then intialize it.
if (!firebase.apps.length) {
	firebase.app();
}

const firestore = firebase.firestore();
