import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBgAbGhyqW9uav_WgjUFMAoRVW_rYLA77Y",
  authDomain: "portfolio-d15f5.firebaseapp.com",
  projectId: "portfolio-d15f5",
  storageBucket: "portfolio-d15f5.appspot.com",
  messagingSenderId: "814621720551",
  appId: "1:814621720551:web:d3624226bc80ae3e060742",
  measurementId: "G-2SCSRXY72S"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const storage = getStorage(app)