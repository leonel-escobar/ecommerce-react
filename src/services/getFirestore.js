import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzwD35PsaJJ_FJ7qdmWf_ANFVgn7_Zkjs",
    authDomain: "app-coder-react-16965.firebaseapp.com",
    projectId: "app-coder-react-16965",
    storageBucket: "app-coder-react-16965.appspot.com",
    messagingSenderId: "756289704517",
    appId: "1:756289704517:web:167f09850889749197492c"
  };

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}