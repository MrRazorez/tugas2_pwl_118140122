const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCOO_OjqGZyY7NDSc1ZoFSBUld5wqhKvBc",
  authDomain: "tugas2-pwl-118140122.firebaseapp.com",
  databaseURL: "https://tugas2-pwl-118140122-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tugas2-pwl-118140122",
  storageBucket: "tugas2-pwl-118140122.appspot.com",
  messagingSenderId: "424663063309",
  appId: "1:424663063309:web:a7bd69c856f958bf83ae44",
  measurementId: "G-QB2SNSCNGN"
};

const firebase = initializeApp(firebaseConfig);

module.exports = firebase;