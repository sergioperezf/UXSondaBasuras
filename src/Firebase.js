import config from './config';
import firebase from 'firebase';
firebase.initializeApp(config);
window.firebase = firebase;
export default firebase;

