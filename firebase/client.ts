// Import the functions you need from the SDKs you need


import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCiw_6geDjbiEC-g4pJnVY07EVlnPPJjU",
    authDomain: "prepify-ee157.firebaseapp.com",
    projectId: "prepify-ee157",
    storageBucket: "prepify-ee157.firebasestorage.app",
    messagingSenderId: "215089804335",
    appId: "1:215089804335:web:d19b497d523632984ec2da",
    measurementId: "G-YPN8D4VHXE"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);