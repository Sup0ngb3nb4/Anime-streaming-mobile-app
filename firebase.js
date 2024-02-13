import firebase from 'firebase/compat/app/'
import  "firebase/compat/auth"
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA10xOdPBqkk0GonMRsrHiCGucMmkRW_qE",
  authDomain: "arisa2.firebaseapp.com",
  projectId: "arisa2",
  storageBucket: "arisa2.appspot.com",
  messagingSenderId: "98004542489",
  appId: "1:98004542489:web:18504ca175b069ed5ef688"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};