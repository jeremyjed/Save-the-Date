// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARgmrL50atb8xtgB7dpjJGFEFHQRkHrfo",
  authDomain: "savethedate-8d312.firebaseapp.com",
  databaseURL: "https://savethedate-8d312-default-rtdb.firebaseio.com",
  projectId: "savethedate-8d312",
  storageBucket: "savethedate-8d312.appspot.com",
  messagingSenderId: "689293278054",
  appId: "1:689293278054:web:50ea5944c3f29d3abaa6a7",
  measurementId: "G-HNRH0HGKNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

window.writeData=function() {
  //console.log('this works.');
  push(ref(db), {
          First_Name: document.getElementById("firstname").value,
          Last_Name: document.getElementById("lastname").value,
          Street: document.getElementById("street").value,
          City: document.getElementById("city").value,
          State: document.getElementById("state").value,
          Zip: document.getElementById("zip").value,
      }

  );}

//var address = document.getElementById("firstname").value
//			writeUserData(address)

//window.writeUserData=function(address) {
//  push(ref(db), {
//    address
// });}