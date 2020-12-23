import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAmRHHbnmu4i8XpVk5LP0_QmQErKfdtdf4",
    authDomain: "whatsapp-react-2020.firebaseapp.com",
    projectId: "whatsapp-react-2020",
    storageBucket: "whatsapp-react-2020.appspot.com",
    messagingSenderId: "77435299549",
    appId: "1:77435299549:web:ccc517e36209fb75c1dd34",
    measurementId: "G-9EPD6W90XF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };