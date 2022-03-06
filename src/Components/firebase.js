import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDazHm4WqZKpy1eoSKiXmbuySVgpsY6gxk",
    authDomain: "instaclone-d85c3.firebaseapp.com",
    projectId: "instaclone-d85c3",
    storageBucket: "instaclone-d85c3.appspot.com",
    messagingSenderId: "676648989859",
    appId: "1:676648989859:web:c3626c76a5382484f73b16"
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};
